#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');
const _ = require('lodash');

function readConfigYaml(versionNumber, base) {
  const filePath = path.join(versionNumber, 'ergogen', `config_${base}.yaml`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents);
    return data;
}

function writeConfigYaml(versionNumber, data) {
  const filePath = path.join(versionNumber, 'ergogen', 'config.yaml');
  const yamlString = yaml.dump(data);
  fs.writeFileSync(filePath, yamlString, 'utf8');
  console.log(`Configuration written to ${filePath}`);
}

function buildConfig(versionNumber, switchType) {
  const baseConfig = readConfigYaml(versionNumber, 'base');
  const switchConfig = readConfigYaml(versionNumber, switchType);
  const mergedConfig = _.merge({}, switchConfig, baseConfig);
  writeConfigYaml(versionNumber, mergedConfig);
}

program
  .version('1.0.0')
  .option('-v, --version <version>', 'Version number', 'v1')
  .option('-s, --switch <switch>', 'Switch type', 'choc')
  .action((options) => {
    if (options.version !== 'v1') {
      console.error('Error: Invalid version number. Only "v1" is supported.');
      process.exit(1);
    }

    if (options.switch !== 'choc' && options.switch !== 'mx') {
      console.error('Error: Invalid switch type. Only "choc" or "mx" are supported.');
      process.exit(1);
    }

    console.log(`Version number: ${options.version}`);
    console.log(`Switch type: ${options.switch}`);

    buildConfig(options.version, options.switch);

    // Execute ergogen command
    const ergogenCommand = `ergogen ${options.version}/ergogen -o output/${options.version}_${options.switch} --clean`;
    console.log(`Executing: ${ergogenCommand}`);
    const { execSync } = require('child_process');
    try {
      execSync(ergogenCommand, { stdio: 'inherit' });
      console.log('Ergogen command executed successfully');
    } catch (error) {
      console.error('Error executing ergogen command:', error.message);
      process.exit(1);
    }
  }
);

program.parse(process.argv);
