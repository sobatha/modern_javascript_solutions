for ( var i = 0; i <10; i++) {
    setTimeout(()=> console.log(i), 1000 * i)
}
//10が10回表示される。
//varはブロックスコープを持たない。またクロージャは変数への新たな参照をキャプチャしているため、
//settimeoutで待っている間にvarによってiがグローバル変数として更新され続ける。
//そのため、setTimeoutが参照する頃にはiは10になっており、10が10回表示される。
//letに修正するだけで良い。letはブロックレベルでのスコープを保つため。
//参考 https://ja.javascript.info/var#ref-315
