'use strict'
function f(a=1, b=2){ console.log(`a=${a}, b=${b}`) }
f() // a=1, b=2
f(a=7, b=10) //Uncaught ReferenceError: a is not defined

//f()ではデフォルト引数であるa=1とb=2が参照されて表示されているが、
//それ以外の関数の呼び出しでは引数の中でa=7としてaが宣言され、それが第一引数に代入されているだけである。
//そのためstrictモードを使用すると、宣言ができないためにエラーとなる
