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

	fse.outputFileSync(
		filePath, 
		content
			.replace(regex, path.dirname(relativeDirectory)+'/web')
			.replace(/\_pb\'/g, '\'')
			.replace(/\_pb\"/g, '"')
			.replace(/\_pb.js\'/g, '\'')
	);

}

const normalizeFields = (filePath: string, fields: Array<string>) => {

	let content = fse.readFileSync(filePath).toString()

	for (const field of fields) {
		let regex;
		
		const pascalCaseField = changeCase.pascal(field);
		const camelCaseField = changeCase.camel(field);

		regex = new RegExp('get'+field+'[\\s]*\\(', 'ig');
		content = content.replace(regex, 'get'+pascalCaseField+'(');

		regex = new RegExp('get'+field+'List[\\s]*\\(', 'ig');
		content = content.replace(regex, 'get'+pascalCaseField+'List(');

		regex = new RegExp('set'+field+'[\\s]*\\(', 'ig');
		content = content.replace(regex, 'set'+pascalCaseField+'(');

		regex = new RegExp('set'+field+'List[\\s]*\\(', 'ig');
		content = content.replace(regex, 'set'+pascalCaseField+'List(');

		regex = new RegExp('has'+field+'[\\s]*\\(', 'ig');
		content = content.replace(regex, 'has'+pascalCaseField+'(');

		regex = new RegExp('clear'+field+'[\\s]*\\(', 'ig');
		content = content.replace(regex, 'clear'+pascalCaseField+'(');

		regex = new RegExp('clear'+field+'List[\\s]*\\(', 'ig');
		content = content.replace(regex, 'clear'+pascalCaseField+'List(');

		regex = new RegExp('add'+field+'[\\s]*\\(', 'ig');
		content = content.replace(regex, 'add'+pascalCaseField+'(');

		regex = new RegExp(field+':', 'ig');
		content = content.replace(regex, camelCaseField+':');
	}

	fse.outputFileSync(filePath, content);

}

const build = () => {
	const protosPattern = path.join(__dirname, '../**/proto/*.proto');

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
		
		const relative = path.relative(path.join(__dirname, '..'), path.dirname(absolute));
		const fileName = path.basename(absolute);
		const relativeDir = path.dirname(absolute);

		const protocCommand = `protoc -I=../../ -I=${path.join(__dirname, '../')} ${path.join(relative, fileName)} --plugin="protoc-gen-ts=${path.join(__dirname, '../node_modules/.bin/protoc-gen-ts')}" --js_out="import_style=commonjs,binary:../../" --ts_out="service=grpc-web:../../"`;

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
			if (!/_service/.test(generatedFile) && !/_grpc_web_pb/.test(generatedFile))
				normalizeFields(generatedFile, fields);
			fse.moveSync(
				generatedFile,
				path.join(
					webDir,
					path.basename(generatedFile)
						.replace(/_service/, '.client')
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