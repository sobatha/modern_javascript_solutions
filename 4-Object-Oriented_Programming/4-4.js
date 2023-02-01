class Pos {
    constructor(x, y) {
        this.x = x,
        this.y = y
    }
    get pointx() {return this.x}
    set pointx(num) {
        if (typeof num === 'number' || num instanceof Number){
            this.x = num;
        }
        else throw new Error('x must be number')
    }

    get pointy() {return this.y}
    set pointy(num) {
        if (typeof num === 'number' || num instanceof Number){
            this.y = num;
        }
        else throw new Error('y must be number')
    }

    translate =(deltax, deltay)=> new Points(this.x+deltax, this.y+deltay)
    scale = (factor) => new Points(factor*this.x, factor*this.y)
}