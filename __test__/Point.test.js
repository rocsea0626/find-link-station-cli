const Point = require("../Point")


describe('Test Point', function () {

    it("valid parameter", (done) => {
        try {
            const point = new Point(2, 2)
        } catch (err) {
            console.log(err)
            expect(err).toBeUndefined()
        }
        done()
    })
})

