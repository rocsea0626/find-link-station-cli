class Point {
    constructor(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number')
            throw new Error(`Point: Invalid parameter type. x=${x}, y=${y}`)

        this.x = x
        this.y = y
    }

    toString() {
        return `Point: (x=${this.x}, y=${this.y})`
    }
}

module.exports = Point