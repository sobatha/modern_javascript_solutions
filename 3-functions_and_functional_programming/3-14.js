// 例外が送出されたコードブロック内にcatch節がなければ、その例外は上位のコードブロックに伝播される。
// たとえば街頭の関数内にcatch節がなく、その関数を呼び出したコードブロックにcatch節があれば、後者で処理される。

try {
     try {
        console.log('try')
        throw Error('not connect')
     } catch(e) {
        console.log('catch', e)
    }
} finally {
    console.log('finally')
}

//try
//catch Error: not connect
//finally