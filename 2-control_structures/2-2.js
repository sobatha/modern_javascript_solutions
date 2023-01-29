//そのまま実行する
let x = 0
if (x===0) console.log('zero') else console.log('nonzero')
// Uncaught SyntaxError: Unexpected token 'else'
// ;をつけないと一つの分として認められない
if (x===0) console.log('zero'); else console.log('nonzero')
// zero
// undefineds