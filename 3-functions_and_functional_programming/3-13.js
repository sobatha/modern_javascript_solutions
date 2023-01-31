const average = (...numbers) => {
    let sum = 0
    let n = 0
    for (const num of numbers) {
        if (typeof num === 'number' || num instanceof Number){
            sum += num
            n++
        } 
        else {
            throw Error('not a number')
        }
    } return n === 0? 0 : sum/n
}

let result = average(1, 2, 3, 6, 8) // 4
let willError = average(1, '4', 10) // Error: not a number