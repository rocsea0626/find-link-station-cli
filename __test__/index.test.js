const {
    findBestLinkStation,
    LinkStation,
    Point
} = require("../index")


describe('Test findBestLinkStation()', function () {

    describe('invalid parameter', () => {
        it("no parameter", (done) => {
            try {
                findBestLinkStation()
            } catch (err) {
                expect(err).toBeDefined()
            }
            done()
        })

        it("empty linkStation list", (done) => {
            try {
                findBestLinkStation([])
            } catch (err) {
                expect(err).toBeDefined()
            }
            done()
        })

        it("point === null", (done) => {
            try {
                const linkStation = new LinkStation(1,1,1)
                findBestLinkStation([...linkStation], null)
            } catch (err) {
                expect(err).toBeDefined()
            }
            done()
        })
    })

    describe('valid parameter', () => {
        it("no parameter", (done) => {
            try {
                const linkStation0 = new LinkStation(1,1,1)
                const linkStation1 = new LinkStation(2,2,2)
                const linkStation2 = new LinkStation(3,3,3)
                const linkStation3 = new LinkStation(4,4,1)

                const linkStations = []
                linkStations.push(linkStation0)
                linkStations.push(linkStation1)
                linkStations.push(linkStation2)
                linkStations.push(linkStation3)

                const point = new Point(3.5,3.5)
                findBestLinkStation(linkStations, point)


            } catch (err) {
                expect(err).toBeUndefined()
            }
            done()
        })
    })

    describe('valid parameter', () => {
        it("no parameter", (done) => {
            try {
                const linkStation0 = new LinkStation(0,0,10)
                const linkStation1 = new LinkStation(20,20,5)
                const linkStation2 = new LinkStation(10,0,12)

                const linkStations = []
                linkStations.push(linkStation0)
                linkStations.push(linkStation1)
                linkStations.push(linkStation2)

                const point = new Point(3.5,3.5)
                findBestLinkStation(linkStations, point)


            } catch (err) {
                expect(err).toBeUndefined()
            }
            done()
        })
    })


})
