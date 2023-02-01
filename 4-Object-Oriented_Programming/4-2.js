function createPoint(x, y) {
    const point = {x, y}
    Object.setPrototypeOf(point, pointPrototype)
    return point
}
const pointPrototype = {
    getX() {return this.x},
    getY() {return this.y},
    translate(deltax, deltay) {return createPoint(this.x+deltax, this.y+deltay)},
    scale(factor) {return createPoint(factor*this.x, factor*this.y)}
}