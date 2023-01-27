const someArray = [0, 1]
someArray[0.5] = 0.5
someArray[1.5] = 1.5
someArray[0.5] //0.5
someArray[1.5] //1.5
someArray //[0, 1, 0.5: 0.5, 1.5: 1.5]
someArray.length //2

//参考 https://stackoverflow.com/questions/6649283/how-are-floating-point-array-indices-interpreted