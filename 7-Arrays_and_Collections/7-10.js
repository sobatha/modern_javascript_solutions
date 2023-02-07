const indexOf = function(arr, f) {
    return arr.map(
        (element, index) => {
        if (f(element)) return index; else return undefined
    }).filter(element => element !== undefined)
}
indexOf([2, 3, 5, -1, -4, 0], x => x > 0) //[0, 1, 2]