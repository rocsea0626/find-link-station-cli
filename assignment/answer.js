const utils = require("../src/utils")
const {findMostPowerLinkStation, Point, LinkStation} = require("../index")

const paramsLinkStations = [
    [0, 0, 10],
    [20, 20, 5],
    [10, 0, 12]
]

const paramsPoints = [
    [0, 0],
    [100, 100],
    [15, 10],
    [18, 18]
]

try {
    const linkStations = paramsLinkStations.map((param) => {
        return new LinkStation(...param)
    })

    paramsPoints.forEach((param) => {
        const point = new Point(...param)
        const bestStation = findMostPowerLinkStation(linkStations, point)
        utils.printAnswer(bestStation, point)
    })
} catch (err) {
    console.log(`Failed, err= ${err}`)
}
