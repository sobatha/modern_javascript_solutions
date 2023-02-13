const invokeAfterDelay =(msec)=> new Promise((resolve)=>setTimeout(()=>resolve('解決: '+msec),msec)) 
promises = [
    invokeAfterDelay(1000),
    invokeAfterDelay(500),
    invokeAfterDelay(2000),
    100,
]

Promise.all(promises).then(results => results.map((result)=>console.log(result)))
Promise.race(promises).then(result => console.log(result)) //100