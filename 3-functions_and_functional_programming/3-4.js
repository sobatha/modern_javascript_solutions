// 正の整数による配列を降順にソートする
const numbers = [1, 100, 10, 4, 90, 20]
numbers.sort((a, b)=> {
    if (a > b) return -1
    if (a < b) return 1
    else return 0
})

// 人々の配列を、年齢（Age)の昇順にソートする
const people = [
    {name: 'Misae', age: 28 }, 
    {name: 'Hiroshi', age: 30 },
    {name: 'Himawari', age: 0}, 
    {name: 'Shinosuke', age: 5},]
people.sort((a, b) => {
    if (a.age > b.age) return 1
    if (a.age < b.age) return -1
    else return 0
})

// 文字列の配列を、長さの昇順にソートする
const words = ['adabakatabura', 'wingardium', 'lepsim', 'namuamidabutu']
words.sort((a,b) => {
    if (a.length > b.length) return 1
    if (a.length < b.length) return -1
    else return 0 
})

