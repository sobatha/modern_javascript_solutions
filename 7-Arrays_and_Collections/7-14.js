function union(set1, set2) {
    const _union = new Set(set1)
    for (let item of set2) {
        _union.add(item)
    }
    return _union
}

function intersect(set1, set2) {
    const _intersect = new Set()
    for (let item of set2) {
        if (set1.has(item)) _intersect.add(item)
    }
    return _intersect
}

function difference(set1, set2) {
    const _difference = new Set(set1)
    for (let item of set2) {
        if (set1.has(item)) _difference.delete(item); else {_difference.add(item)}
    }
    return _difference
}

union(setA, setC)      // Set(6) {1, 2, 3, 4, 5, …}
intersect(setA, setC)  // Set(2) {3, 4}
difference(setA, setC) // Set(4) {1, 2, 5, 6}