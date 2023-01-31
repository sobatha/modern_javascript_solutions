'use strict'
if (Math.random( )<0.5) {
    say('Hello')
    function say(text) {console.log(`${text}!`)}
}
say('Goodbye')

// 半分の確率でHello!とGoodbye!が、残りの確率でGoodbye!のみが表示される。
// 非strictモードにおいてはブロック内での関数宣言も外側のスクリプトまで広がっている。
// 初期化されるのは巻き上げが行われるためスコープの先頭で空間が予約されている。
// strictモードにすると、ブロックの外へのスコープは無くなるため、
// Goodbye!は表示されなくなる(referenceError)