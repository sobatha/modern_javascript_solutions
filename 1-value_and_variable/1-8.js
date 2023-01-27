const someArray = [1, , , 4, 5, 6]
someArray.length //6
someArray[2] //undefined
someArray //[1, empty × 2, 4, 5, 6]

const anotherArray = [0]
anotherArray[2] = undefined
anotherArray //[0, empty, undefined]