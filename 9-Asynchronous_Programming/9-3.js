const invokeAfterDelay = function(f, delay) {
    return new Promise((resolve, reject) => {
        const callback = () => resolve(f())
        setTimeout(callback, delay)
    })
}

const random = function() {
    return Math.random()
}

let promises = [
    invokeAfterDelay(random, 3000),
    invokeAfterDelay(random, 2000)
]

Promise.all(promises).then(values => {
    let sum = 0
    for (const value of values) sum += value
    console.log(sum)
})