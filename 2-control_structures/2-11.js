let i=0
while (i<=10) {
    console.log(i)
    i++
}

let arr = [, 2, , 4]
arr[9] = 100
while (i < arr.length) {
    console.log(arr[i])
    i++
}

let obj = { name: 'Harry', age: 42 }
let keys = Object.keys(obj)
while (i < keys.length) {
    console.log(`${keys[i]}: ${obj[keys[i]]}`)
    i++
}