produceAfterRandomDelay = (value) => new Promise((resolve) => setTimeout(()=>resolve(value), Math.random()*10000))

promises = [
    produceAfterRandomDelay(1),
    produceAfterRandomDelay(2),
    produceAfterRandomDelay(3),
    produceAfterRandomDelay(4),
    produceAfterRandomDelay(5),
    produceAfterRandomDelay(6),
    produceAfterRandomDelay(7),
    produceAfterRandomDelay(8),
    produceAfterRandomDelay(9),
    produceAfterRandomDelay(10),   
]

Promise.all(promises).then(results => {
    for (result of results) console.log(result)
}) //   1-10の順に出る