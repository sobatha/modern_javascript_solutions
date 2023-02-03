class Node {
    depth(){ throw Error("abstruct method")}
}
class Parent extends Node {
    constructor(value, children) {}
    depth() {return  1 + Math.max(...children.map(n => n.depth()))}
}
class Leef extends Node {
    constructor(value) {}
    depth() {return 1}
}

//回答
class Node {
    depth(){ return 0 }
}
class Nodes extends Node{
    constructor(value) {}
    depth() {return super.depth() + 1}
}

// TODO　テスト書く
