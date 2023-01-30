function indexOf(arr, value){
    for (let i in arr) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1
}

obj = {
    name: 'Harry',
    age: 42
}

indexOf(obj, 42) //age obj内のvalueをもつプロパティを返す