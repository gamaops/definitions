"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const glob_1 = __importDefault(require("glob"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const util_1 = __importDefault(require("util"));
const elasticsearch_1 = require("@elastic/elasticsearch");
const ENVIRONMENT = process.env.ENVIRONMENT || 'development';
const client = new elasticsearch_1.Client(require(path_1.default.isAbsolute(process.argv[2])
    ? process.argv[2]
    : path_1.default.join(process.cwd(), process.argv[2])));
const setIlmPolicy = async (settings) => {
    await client.ilm.putLifecycle({
        policy: settings.name,
        body: {
            policy: settings.policy
        }
    });
};
const setTemplate = async (settings) => {
    await client.indices.putTemplate({
        name: settings.name,
        create: false,
        body: {
            index_patterns: settings.index_patterns,
            settings: settings.settings,
        }
    });
};
const putIndexSettings = async (settings) => {
    const exists = await client.indices.exists({
        index: settings.index
    });
    if (!exists.body) {
        await client.indices.create({
            index: settings.index,
            body: {}
        });
    }
    if (settings.aliases) {
        for (const alias in settings.aliases)
            await client.indices.putAlias({
                index: settings.index,
                name: alias,
                body: settings.aliases[alias]
            });
    }
};
const execute = async () => {
    const files = glob_1.default.sync(path_1.default.join(__dirname, `../*/elastic/*/settings.${ENVIRONMENT}.yaml`), {
        nodir: true,
        ignore: [
            'node_modules/',
            'src/'
        ],
        absolute: true
    });
    for (const file of files) {
        const items = js_yaml_1.default.safeLoadAll(fs_extra_1.default.readFileSync(file).toString());
        for (const item of items) {
            switch (item.type) {
                case 'set-ilm-policy':
                    await setIlmPolicy(item);
                    break;
                case 'set-template':
                    await setTemplate(item);
                    break;
                case 'put-index-settings':
                    await putIndexSettings(item);
                    break;
            }
        }
    }
};
execute().catch((error) => console.error(util_1.default.inspect(error, false, null)));
