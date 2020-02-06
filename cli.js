#!/usr/bin/env node

const pkg = require('./package.json')
const program = require('commander')
program.version(pkg.version)
    .option('-i, --inputFile-stations <file>', 'input file, defines parameters for a list of stations')
    .option('-p, --point (x, y)', 'coordinates of a point')

program.parse(process.argv)

if (program.inputFileStations)
    console.log(`- ${program.inputStations}`);
