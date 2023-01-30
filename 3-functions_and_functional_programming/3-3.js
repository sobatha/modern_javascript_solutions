function value(f, low, high) {
    let arr = []
    for (let i = low; i <= high; i++) {
        arr.push(f(i))
    }
}
