const LinkStation = require("../LinkStation")
const Point = require("../Point")


describe('Test LinkStation.js', function () {

    describe('invalid constructor parameters', () => {
        it("no parameter", (done) => {
            try {
                const linkStation = new LinkStation()
            } catch (err) {
                expect(err).toBeDefined()
            }
            done()
        })

        it("missing parameter", (done) => {
            try {
                const linkStation = new LinkStation(1, 2)
            } catch (err) {
                expect(err).toBeDefined()
            }
            done()
        })

        it("negative reach parameter", (done) => {
            try {
                const linkStation = new LinkStation(1, 5, -1)
            } catch (err) {
                expect(err).toBeDefined()
            }
            done()
        })
    })

    describe('test _distance()', () => {

        it("valid paramter, all coordinates are integers", (done) => {
            try {
                const linkStation = new LinkStation(0, 0, 5)
                const point = new Point(1, 2)
                const dist = linkStation._distance(point)
                expect(dist).toEqual(Math.sqrt(1 + 4))
            } catch (err) {
                console.log(err)

                expect(err).toBeUndefined()
            }
            done()
        })


        it("valid paramter, 1 coordinates is float", (done) => {
            try {
                const linkStation = new LinkStation(1.1, 0, 5)
                const point = new Point(1, 2)
                const dist = linkStation._distance(point)
                expect(dist).toEqual(Math.sqrt(0.01 + 4))
            } catch (err) {
                console.log(err)

                expect(err).toBeUndefined()
            }
            done()
        })

        it("valid paramter, 1 coordinates is negative float", (done) => {
            try {
                const linkStation = new LinkStation(-1.1, 0, 5)
                const point = new Point(1, 2)
                const dist = linkStation._distance(point)
                expect(dist).toEqual(Math.sqrt(Math.pow(2.1, 2) + 4))
            } catch (err) {
                console.log(err)
                expect(err).toBeUndefined()
            }
            done()
        })

        it("valid paramter, both coordinates are negative", (done) => {
            try {
                const linkStation = new LinkStation(-2, -3, 5)
                const point = new Point(-1, -1)
                const dist = linkStation._distance(point)
                expect(dist).toEqual(Math.sqrt(5))
            } catch (err) {
                console.log(err)
                expect(err).toBeUndefined()
            }
            done()
        })

        it("valid paramter, large coordinates values", (done) => {
            try {
                const linkStation = new LinkStation(1000, 1001, 10)
                const point = new Point(0, 0)
                const dist = linkStation._distance(point)
                expect(dist).toEqual(Math.sqrt(Math.pow(1000, 2) + Math.pow(1001, 2)))
            } catch (err) {
                console.log(err)
                expect(err).toBeUndefined()
            }
            done()
        })
    })

    describe('test power()', () => {

        it("valid parameter, power > 0", (done) => {
            try {
                const linkStation = new LinkStation(0, 0, 5)
                const point = new Point(2, 2)
                const power = linkStation.power(point)
                expect(power).toEqual(Math.pow(5 - linkStation._distance(point),2))
            } catch (err) {
                console.log(err)
                expect(err).toBeUndefined()
            }
            done()
        })


        it("valid parameter, power === 0", (done) => {
            try {
                const linkStation = new LinkStation(0, 0, 1)
                const point = new Point(1, 2)
                const power = linkStation.power(point)
                expect(power).toEqual(0)
            } catch (err) {
                console.log(err)
                expect(err).toBeUndefined()
            }
            done()
        })
    })



})