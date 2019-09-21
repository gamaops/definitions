import path from 'path';
import glob from 'glob';
import yaml from 'js-yaml';
import fse from 'fs-extra';
import util from 'util';
import { Client } from '@elastic/elasticsearch';

const ENVIRONMENT = process.env.ENVIRONMENT || 'development';

const client = new Client(require(
	path.isAbsolute(process.argv[2])
	? process.argv[2]
	: path.join(process.cwd(), process.argv[2])
));

const setIlmPolicy = async (settings: any) => {
	await client.ilm.putLifecycle({
		policy: settings.name,
		body: {
			policy: settings.policy
		}
	});
}

const setTemplate = async (settings: any) => {
	await client.indices.putTemplate({
		name: settings.name,
		create: false,
		body: {
			index_patterns: settings.index_patterns,
			settings: settings.settings,
		}
	});
}

const putIndexSettings = async (settings: any) => {
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
			} as any);
	}
}

const execute = async () => {
	
	const files = glob.sync(
		path.join(__dirname, `../*/elastic/*/settings.${ENVIRONMENT}.yaml`),
		{
			nodir: true,
			ignore: [
				'node_modules/',
				'src/'
			],
			absolute: true
		}
	);
	
	for (const file of files) {
		const items = yaml.safeLoadAll(
			fse.readFileSync(file).toString()
		);

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

}

execute().catch((error) => console.error(util.inspect(error, false, null)));