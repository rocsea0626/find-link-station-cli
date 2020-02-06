const fs = require("fs")


const findBestLinkStation = (linkStations, point) => {

    if (!linkStations || !point || linkStations.length === 0) {
        throw new Error("invalid input")
    }

    let biggestPower = 0, bestLinkStation
    linkStations.forEach((linkStation) => {
        const power = linkStation.power(point)
        if (power > biggestPower) {
            biggestPower = power
            bestLinkStation = linkStation
        }
    })

    if (biggestPower > 0) {
        return bestLinkStation
    }

    return null
}

const parseLinkStationFile = (filename) =>{
    const str = fs.readFileSync(filename, 'utf-8')
    console.log(str)
}

module.exports.findBestLinkStation = findBestLinkStation
module.exports.parseLinkStationFile = parseLinkStationFile

