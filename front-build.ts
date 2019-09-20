import path from 'path';
import jsonpath from 'jsonpath';
import glob from 'glob';
import { Root } from 'protobufjs';
import { execSync } from 'child_process';
import fse from 'fs-extra';
import changeCase from 'change-case';

const normalizeDirectories = (filePath: string, relativeDirectory: string) => {

	const content = fse.readFileSync(filePath).toString()
	const regex = new RegExp(relativeDirectory.replace(/\//i, '\\/'), 'g');

	fse.outputFileSync(filePath, content.replace(regex, path.dirname(relativeDirectory)+'/web'));

}

const normalizeFields = (filePath: string, fields: Array<string>) => {

	let content = fse.readFileSync(filePath).toString()

	for (const field of fields) {
		let regex;
		
		const pascalCaseField = changeCase.pascal(field);
		const camelCaseField = changeCase.camel(field);

		regex = new RegExp('get'+field, 'ig');
		content = content.replace(regex, 'get'+pascalCaseField);

		regex = new RegExp('set'+field, 'ig');
		content = content.replace(regex, 'set'+pascalCaseField);

		regex = new RegExp(field+':', 'ig');
		content = content.replace(regex, camelCaseField+':');
	}

	fse.outputFileSync(filePath, content);

}

const build = () => {
	const protosPattern = path.join(__dirname, '**/proto/*.proto');

	const webDirs: Set<string> = new Set();

	glob.sync(
		protosPattern,
		{
			nodir: true,
			ignore: [
				'node_modules/'
			],
			absolute: true
		}
	).forEach((absolute) => {
		const root = new Root();
		root.loadSync(absolute);
		const rootObject = JSON.parse(JSON.stringify(root))

		const fields = jsonpath.paths(rootObject, '$..fields.*').map((paths) => paths.pop()) as Array<string>;
		
		const relative = path.relative(__dirname, path.dirname(absolute));
		const fileName = path.basename(absolute);
		const relativeDir = path.dirname(absolute);

		const protocCommand = `protoc -I=../../ ${path.join(relative, fileName)} --js_out=import_style=commonjs:../../ --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:../../`;

		execSync(
			protocCommand,
			{
				cwd: relativeDir
			}
		);
		const webDir = path.join(
			relativeDir,
			'../web'
		);

		if (!webDirs.has(webDir)) {
			webDirs.add(webDir);
			fse.removeSync(webDir);
		}
		fse.ensureDirSync(webDir);

		const generatedFiles = glob.sync(
			path.join(
				relativeDir,
				'+(*.js|*.ts)'
			),
			{
				nodir: true,
				absolute: true
			}
		);

		for (const generatedFile of generatedFiles) {
			normalizeDirectories(generatedFile, relative);
			normalizeFields(generatedFile, fields);
			fse.moveSync(
				generatedFile,
				path.join(
					webDir,
					path.basename(generatedFile)
						.replace(/_grpc_web_pb/, '.client')
						.replace(/_pb/, '')
				),
				{
					overwrite: true
				}
			);
		}

	});

}

build();