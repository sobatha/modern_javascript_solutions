//動かないコード
const button = document.getElementById('button')
button.addEventListener('click', function() {
    this.classList.toggle('clicked')
})

//修正すべきコード　リスナーがevent、targetとして作っていなかった場合でも
//動くようにthisもeventパラメータも使わないようにコードを修正する

button.addEventListener('click', event => {
    event.target.classList.toggle('clicked')
})

