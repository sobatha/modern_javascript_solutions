const invokeAfterDelay = function(f, delay) {
    return new Promise((resolve, reject) => {
        const callback = () => resolve(f())
        setTimeout(callback, delay)
    })
}

const random = function() {
    return Math.random()
}

let makePromises = function(n) {
    const promises = []
    for (let i=0; i<n; i++) promises.push(invokeAfterDelay(random, 3000))
    return promises
}

Promise.all(makePromises(n)).then(values => {
    let sum = 0
    for (const value of values) sum += value
    console.log(sum)
})