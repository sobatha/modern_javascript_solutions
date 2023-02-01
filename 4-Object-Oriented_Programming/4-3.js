class Points {
    constructor(x, y) {
        this.x = x,
        this.y = y
    }
    getX =()=> this.x
    getY =()=> this.y
    translate =(deltax, deltay)=> new Points(this.x+deltax, this.y+deltay)
    scale = (factor) => new Points(factor*this.x, factor*this.y)
}