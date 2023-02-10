const invokeAfterDelay = function(f, delay) {
    return new Promise((resolve, reject) => {
        const callback = () => resolve(f())
        setTimeout(callback, delay)
    })
}

const random = function() {
    return Math.random()
}

invokeAfterDelay(random, 1000).then(console.log)