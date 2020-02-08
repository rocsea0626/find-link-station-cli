const fs = require("fs")
const LinkStation = require("./LinkStation")

/**
 * Parse array of LinkStations defined in a json file of a 2-dimensional array
 * Each LinkStation is defined as an array of [x, y, r]
 * Sample:
 * [
 *   [0, 0, 10],
 *   [20, 20, 5],
 *   [10, 0, 12]
 * ]
 *
 * @param {String} filename
 * @return {Array} array of LinkStations
 */
const parseLinkStationFile = (filename) => {
    try {
        const str = fs.readFileSync(filename, 'utf-8')
        const params = JSON.parse(str)
        return params.map((param) => {
            return new LinkStation(...param)
        })
    } catch (err) {
        throw err
    }

}

/**
 * Print answer according to required format
 * @param linkStation
 * @param point
 */
const printAnswer = (linkStation, point) => {
    if (linkStation)
        console.log(
            `Best link station for point ${point.x}, ${point.y} is ${linkStation.x}, ${linkStation.y} with power ${linkStation.power(point)}`
        )
    else
        console.log(`No link station within reach for point ${point.x}, ${point.y}`)
}


module.exports = {
    parseLinkStationFile,
    printAnswer
}