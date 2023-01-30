function indexOf(arr, value){
    let index = -1;
    for (let i in arr) {
        if (arr[i] === value) {
            index = i
        }
    }
    return index
}