#!/usr/bin/env node

const utils = require('../src/utils')
const {
    findMostPowerLinkStation,
    Point
} = require('../index')
const pkg = require('../package.json')
const program = require('commander')


function commaSeparatedList(value, dummyPrevious) {
    const tokens = value.split(',')
    return tokens.map((token) => {
        return Number(token).valueOf()
    })
}

program.version(pkg.version)
    .option('-i, --inputFile-stations <file>', 'text file with a 2-dimensional array which defines parameters for stations')
    .option('-p, --point <x,y>', 'x,y coordinates of a point without space', commaSeparatedList)

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
    const bestStation = findMostPowerLinkStation(linkStations, point)

    utils.printAnswer(bestStation, point)

} catch (err) {
    console.log(err)
}




