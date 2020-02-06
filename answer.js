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
        if (bestStation)
            console.log(
                `Best link station for point ${point.x}, ${point.y} is ${bestStation.x}, ${bestStation.y} with power ${bestStation.power(point)}`
            )
        else
            console.log(`No link station within reach for point ${point.x}, ${point.y}`)
    })
} catch (err) {
    console.log(`Failed, err= ${err}`)
}

