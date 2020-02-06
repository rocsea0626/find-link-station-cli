const utils = require("./utils")
const LinkStation = require("./src/LinkStation")
const Point = require("./src/Point")
const findBestLinkStation = require("./index")

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
        const bestStation = findBestLinkStation(linkStations, point)
        utils.printAnswer(bestStation, point)
    })
} catch (err) {
    console.log(`Failed, err= ${err}`)
}
