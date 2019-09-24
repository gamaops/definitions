"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const jsonpath_1 = __importDefault(require("jsonpath"));
const glob_1 = __importDefault(require("glob"));
const protobufjs_1 = require("protobufjs");
const child_process_1 = require("child_process");
const fs_extra_1 = __importDefault(require("fs-extra"));
const change_case_1 = __importDefault(require("change-case"));
const normalizeDirectories = (filePath, relativeDirectory) => {
    const content = fs_extra_1.default.readFileSync(filePath).toString();
    const regex = new RegExp(relativeDirectory.replace(/\//i, '\\/'), 'g');
    fs_extra_1.default.outputFileSync(filePath, content
        .replace(regex, path_1.default.dirname(relativeDirectory) + '/web')
        .replace(/\_pb\'/g, '\'')
        .replace(/\_pb\"/g, '"')
        .replace(/\_pb.js\'/g, '\''));
};
const normalizeFields = (filePath, fields) => {
    let content = fs_extra_1.default.readFileSync(filePath).toString();
    for (const field of fields) {
        let regex;
        const pascalCaseField = change_case_1.default.pascal(field);
        const camelCaseField = change_case_1.default.camel(field);
        regex = new RegExp('get' + field + '[\\s]*\\(', 'ig');
        content = content.replace(regex, 'get' + pascalCaseField + '(');
        regex = new RegExp('prototype\\.get' + field, 'ig');
        content = content.replace(regex, 'prototype.get' + pascalCaseField);
        regex = new RegExp('get' + field + 'List[\\s]*\\(', 'ig');
        content = content.replace(regex, 'get' + pascalCaseField + 'List(');
        regex = new RegExp('set' + field + '[\\s]*\\(', 'ig');
        content = content.replace(regex, 'set' + pascalCaseField + '(');
        regex = new RegExp('prototype\\.set' + field, 'ig');
        content = content.replace(regex, 'prototype.set' + pascalCaseField);
        regex = new RegExp('set' + field + 'List[\\s]*\\(', 'ig');
        content = content.replace(regex, 'set' + pascalCaseField + 'List(');
        regex = new RegExp('has' + field + '[\\s]*\\(', 'ig');
        content = content.replace(regex, 'has' + pascalCaseField + '(');
        regex = new RegExp('prototype\\.has' + field, 'ig');
        content = content.replace(regex, 'prototype.has' + pascalCaseField);
        regex = new RegExp('clear' + field + '[\\s]*\\(', 'ig');
        content = content.replace(regex, 'clear' + pascalCaseField + '(');
        regex = new RegExp('prototype\\.clear' + field, 'ig');
        content = content.replace(regex, 'prototype.clear' + pascalCaseField);
        regex = new RegExp('clear' + field + 'List[\\s]*\\(', 'ig');
        content = content.replace(regex, 'clear' + pascalCaseField + 'List(');
        regex = new RegExp('add' + field + '[\\s]*\\(', 'ig');
        content = content.replace(regex, 'add' + pascalCaseField + '(');
        regex = new RegExp('prototype\\.add' + field, 'ig');
        content = content.replace(regex, 'prototype.add' + pascalCaseField);
        regex = new RegExp(field + ':', 'ig');
        content = content.replace(regex, camelCaseField + ':');
    }
    fs_extra_1.default.outputFileSync(filePath, content);
};
const build = () => {
    const protosPattern = path_1.default.join(__dirname, '../**/proto/*.proto');
    const webDirs = new Set();
    glob_1.default.sync(protosPattern, {
        nodir: true,
        ignore: [
            'node_modules/'
        ],
        absolute: true
    }).forEach((absolute) => {
        const root = new protobufjs_1.Root();
        root.loadSync(absolute);
        const rootObject = JSON.parse(JSON.stringify(root));
        const fields = jsonpath_1.default.paths(rootObject, '$..fields.*').map((paths) => paths.pop());
        const relative = path_1.default.relative(path_1.default.join(__dirname, '..'), path_1.default.dirname(absolute));
        const fileName = path_1.default.basename(absolute);
        const relativeDir = path_1.default.dirname(absolute);
        const protocCommand = `protoc -I=../../ -I=${path_1.default.join(__dirname, '../')} ${path_1.default.join(relative, fileName)} --plugin="protoc-gen-ts=${path_1.default.join(__dirname, '../node_modules/.bin/protoc-gen-ts')}" --js_out="import_style=commonjs,binary:../../" --ts_out="service=grpc-web:../../"`;
        child_process_1.execSync(protocCommand, {
            cwd: relativeDir
        });
        const webDir = path_1.default.join(relativeDir, '../web');
        if (!webDirs.has(webDir)) {
            webDirs.add(webDir);
            fs_extra_1.default.removeSync(webDir);
        }
        fs_extra_1.default.ensureDirSync(webDir);
        const generatedFiles = glob_1.default.sync(path_1.default.join(relativeDir, '+(*.js|*.ts)'), {
            nodir: true,
            absolute: true
        });
        for (const generatedFile of generatedFiles) {
            normalizeDirectories(generatedFile, relative);
            if (!/_service/.test(generatedFile) && !/_grpc_web_pb/.test(generatedFile))
                normalizeFields(generatedFile, fields);
            fs_extra_1.default.moveSync(generatedFile, path_1.default.join(webDir, path_1.default.basename(generatedFile)
                .replace(/_service/, '.client')
                .replace(/_grpc_web_pb/, '.client')
                .replace(/_pb/, '')), {
                overwrite: true
            });
        }
    });
};
build();
