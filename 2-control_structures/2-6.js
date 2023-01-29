const numbers = [1, 2, 3, 4, 5, 6]
// 古典的なforループ
const findMax = function(numbers) {
    let temp = 0
    for (let i=0; i < numbers.length; i++) {
        if (numbers[i] > temp) {
            temp = numbers[i]
        }
    }
    return temp
} 
findMax(numbers)

//for ofループ
const findMax2 = function(numbers) {
    let temp = 0
    for (const i of numbers) {
        if (numbers[i] > temp) {
            temp = numbers[i]
        }
    }
    return temp
} 
findMax2(numbers)

//for inループ
const findMax3 = function(numbers) {
    let temp = 0
    for (const i in numbers) {
        if (numbers[i] > temp) {
            temp = numbers[i]
        }
    }
    return temp
} 
findMax3(numbers)