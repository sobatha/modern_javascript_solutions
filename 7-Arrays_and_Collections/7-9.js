const allIndexOf = function(array, value) {
    return array.map(
        (element, index) => {
            if (element === value) return index; else -1
        }).filter(element => element > 0)
}
allIndexOf([3,2,1,0,3,0,0], 0) //[3, 5, 6]