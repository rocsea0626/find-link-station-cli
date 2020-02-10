#!/usr/bin/env node

const utils = require('../src/utils')
const pkg = require('../package.json')
const program = require('commander')
const {
    findMostPowerLinkStation,
    Point
} = require('../index')


function commaSeparatedList(value, dummyPrevious) {
    const tokens = value.split(',')
    return tokens.map((token) => {
        return Number(token).valueOf()
    })
}

try {

    program.version(pkg.version)
        .option('-i, --inputFile-stations <file>', '.json file defines parameters for link stations')
        .option('-p, --point <x,y>', 'x,y coordinates of a point', commaSeparatedList)
        .usage("-i <file> -p x,y")
        .parse(process.argv)

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




