const average = (first = 0, ...following) => {
    let sum = first
    for (const value of following) sum += value
    return sum / (1+following.length)
}
average(0, 10)