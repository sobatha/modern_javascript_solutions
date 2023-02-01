function createPoint(x, y) {
    point = {
        x: x,
        y: y,
        getX() {return this.x},
        getY() {return this.y},
        translate(deltax, deltay) {return createPoint(this.x+deltax, this.y+deltay)},
        scale(factor) {return createPoint(factor*this.x, factor*this.y)}
    }
    
}

