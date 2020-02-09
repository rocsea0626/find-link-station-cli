const {
    findMostPowerLinkStation,
    LinkStation,
    Point
} = require("../index")


describe('Test findMostPowerLinkStation()', function () {

    describe('invalid parameter', () => {
        it("no parameter", (done) => {
            try {
                findMostPowerLinkStation()
            } catch (err) {
                expect(err).toBeDefined()
            }
            done()
        })

        it("empty linkStation list", (done) => {
            try {
                findMostPowerLinkStation([])
            } catch (err) {
                expect(err).toBeDefined()
            }
            done()
        })

        it("point === null", (done) => {
            try {
                const linkStation = new LinkStation(1, 1, 1)
                findMostPowerLinkStation([...linkStation], null)
            } catch (err) {
                expect(err).toBeDefined()
            }
            done()
        })
    })

    describe('valid parameter', () => {
        it("point not within reach ", (done) => {
            try {
                const linkStation0 = new LinkStation(1, 1, 1)
                const linkStation1 = new LinkStation(2, 2, 2)
                const linkStation2 = new LinkStation(3, 3, 3)
                const linkStation3 = new LinkStation(4, 4, 1)

                const linkStations = []
                linkStations.push(linkStation0)
                linkStations.push(linkStation1)
                linkStations.push(linkStation2)
                linkStations.push(linkStation3)

                const point = new Point(-3.5, -8.732)
                const bestStation = findMostPowerLinkStation(linkStations, point)
                expect(bestStation).toBeFalsy()
            } catch (err) {
                expect(err).toBeUndefined()
            }
            done()
        })

        it("point within reach, point in 2nd domain", (done) => {
            try {
                const linkStation0 = new LinkStation(0, 0, 10)
                const linkStation1 = new LinkStation(20, 20, 5)
                const linkStation2 = new LinkStation(10, 0, 12)

                const linkStations = []
                linkStations.push(linkStation0)
                linkStations.push(linkStation1)
                linkStations.push(linkStation2)

                const point = new Point(-6.78, 3)
                const bestStation = findMostPowerLinkStation(linkStations, point)
                expect(bestStation).toEqual(expect.anything())

                const expectedDist = Math.sqrt(Math.pow(-6.78 - linkStation0.x, 2) + Math.pow(3 - linkStation0.y, 2))
                expect(bestStation._distance(point)).toEqual(expectedDist)

                const expectedPower = Math.pow(bestStation.r - expectedDist, 2)
                expect(bestStation.power(point)).toEqual(expectedPower)


            } catch (err) {
                expect(err).toBeUndefined()
            }
            done()
        })

        it("point within reach, return most powerful link station if multiple link stations have equal distance to point", (done) => {
            try {
                const linkStation0 = new LinkStation(3, 3, 10)
                const linkStation1 = new LinkStation(-3, 3, 5)

                const linkStations = []
                linkStations.push(linkStation0)
                linkStations.push(linkStation1)

                const point = new Point(0, 0)
                const bestStation = findMostPowerLinkStation(linkStations, point)
                expect(bestStation).toEqual(linkStation0)

            } catch (err) {
                expect(err).toBeUndefined()
            }
            done()
        })

        it("point within reach, returns 1st most powerful link station if multiple link stations have same power", (done) => {
            try {
                const linkStation0 = new LinkStation(10, 0, 12)
                const linkStation1 = new LinkStation(1, 1, 10)
                const linkStation2 = new LinkStation(-1, -1, 10)

                const linkStations = []
                linkStations.push(linkStation0)
                linkStations.push(linkStation1)
                linkStations.push(linkStation2)

                const point = new Point(0, 0)
                const bestStation = findMostPowerLinkStation(linkStations, point)
                expect(bestStation).toEqual(linkStation1)

            } catch (err) {
                expect(err).toBeUndefined()
            }
            done()
        })
    })
})
