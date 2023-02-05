// const action = BankAccount.prototype.deposit
// action(1000) // 動かない　メソッドをオブジェクトなしで呼び出すとthisがundefinedになる

const harrysAccount = new BankAccount()
const action = harrysAccount.deposit
action(1000)
//TypeError: Cannot read properties of undefined (reading 'balance')
//depositのthisが正しくバインドされていない
// アロー関数を使えば良い
// アロー関数の中のthisはアロー関数の外でthisが意味するものになる

action = (amount) => {
    harrysAccount.deposit
}