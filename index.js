
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
        console.log(`Best link station for point ${point.x}, ${point.y} is ${bestLinkStation.x}, ${bestLinkStation.y} with power ${biggestPower}`)
        return bestLinkStation

    }

    console.log(`No link station within reach for point ${point.x}, ${point.y}`)
    return null

}

module.exports = findBestLinkStation

