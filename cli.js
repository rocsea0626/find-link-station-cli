#!/usr/bin/env node

const utils = require('./utils')
const findBestLinkStation = require('./index')
const Point = require('./src/Point')
const pkg = require('./package.json')
const program = require('commander')


function commaSeparatedList(value, dummyPrevious) {
    const tokens = value.split(',')
    return tokens.map((token) => {
        return Number(token).valueOf()
    })
}

program.version(pkg.version)
    .option('-i, --inputFile-stations <file>', 'input file, defines parameters for a list of stations')
    .option('-p, --point <coordinates>', 'coordinates of a point', commaSeparatedList)
    .option('-d, --debug', 'trigger debug mode')


try {
    program.parse(process.argv)

    if (!program.inputFileStations) {
        console.log("missing input file for link stations")
        return
    }

    if (!program.point) {
        console.log("missing parameters for point")
        return
    }


    const fileName = program.inputFileStations
    const linkStations = utils.parseLinkStationFile(fileName)
    const point = new Point(...program.point)
    const bestStation = findBestLinkStation(linkStations, point)

    utils.printAnswer(bestStation, point)

} catch (err) {
    console.log(err)
}




