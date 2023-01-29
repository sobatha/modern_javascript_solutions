let count = 0
let sum = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        count++
        sum+= arr[i]
    }
}
let avg = count === 0? 0 : sum / count