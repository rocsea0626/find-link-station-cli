class LinkStation {

    constructor(x, y, r) {

        if(typeof x !== 'number' || typeof y !== 'number' || typeof r !== 'number')
            throw new Error("LinkStation: Invalid parameter type")

        if (r < 0)
            throw new Error("LinkStation: Invalid value of reach")

        this.x = x
        this.y = y
        this.r = r
    }

    power(point) {
        const dist = this._distance(point)
        if(dist > this.r)
            return 0

        return Math.pow(this.r - dist, 2)
    }

    _distance(point) {
        return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2))
    }

    toString() {
        return `LinkStation(x=${this.x}, y=${this.y}, r=${this.r})`
    }
}

module.exports = LinkStation