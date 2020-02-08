/**
 * Find the best link station for a single point from given array of link stations
 *
 * @param linkStations: array of LinkStation
 * @param point: instance of Point
 * @returns {null|LinkStation}
 */
const findBestLinkStation = (linkStations, point) => {

    if (!linkStations || !point || linkStations.length === 0) {
        throw new Error("invalid input")
    }

    let biggestPower = 0, bestLinkStation = null
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
    findBestLinkStation
}

