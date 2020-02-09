/**
 * Find the 1st link station in the provided array that has most power of given point.
 *
 * @param linkStations: array of LinkStation
 * @param point: instance of Point
 * @returns {null|LinkStation}
 */
const findMostPowerLinkStation = (linkStations, point) => {
    if (!linkStations || !point || linkStations.length === 0) {
        throw new Error("invalid input")
    }

    let biggestPower = 0, bestLinkStation = undefined
    linkStations.forEach((linkStation) => {
        const power = linkStation.power(point)
        if (power > biggestPower) {
            biggestPower = power
            bestLinkStation = linkStation
        }
    })

    return bestLinkStation
}

module.exports = {
    LinkStation: require('./src/LinkStation'),
    Point: require('./src/Point'),
    findMostPowerLinkStation: findMostPowerLinkStation
}

