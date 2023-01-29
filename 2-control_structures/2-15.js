// outer break, continue
let result = 0
a = 'pocabcde'
b = 'cd'
outer:
for (let i = 0 ; i < a.length - b.length; i++) {
    inner:
    for (let j = 0; j < b.length; j++) {
        if (a[i+j] != b[j]) break inner;
        if (a[i+j] = b[j]) {
            if (j+1 < b.length) continue
            result = i
            break outer;             
        }
    }
}
console.log(result)

//without break nor continue
for (let i = 0 ; i < a.length - b.length; i++) {
    let check = 0
    for (let j = 0; j < b.length; j++) {
        if (a[i+j] === b[j]) check++
        if (check == b.length) result = i
    }
}
console.log(result)