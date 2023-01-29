// 式文
console.log(6 *7) //42 undefined
42 //42
undefined //undefined

// 変数宣言
const number = 6*7 //undefined

// 一個の文を内側にもつブロック文
{ `fread`.toUpperCase(); } //'FREAD'

// 空のブロック文
{} //{}

// while do forのループで少なくとも１回は実行されるもの
for (let i=1; i <2; i++) {console.log(i);} // 1 undefined

// 本体が１回も実行されないループ
for (let i=1; i <1; i++) {console.log(i);} //undefined

// if文
const a = null
if (a==0) {console.log(a)} //undefined

// 通常に終了するtry文
let itemPrice = 300
let possessedMoney = 500

try {
    if (itemPrice < possessedMoney) {
        console.log('you can buy')
    }
    else console.log('you cannot buy')
} catch {
    console.log('invalid input')
}
// you can buy
// undefined

// catch節が実行されるtry文
itemPrice = 300
possessedMoney = '５百円'

try {
    if (itemPrice < possessedMoney) {
        console.log('you can buy')
    }
    else console.log('you cannot buy')
} catch {
    console.log('invalid input')
}
// you cannot buy
// undefined