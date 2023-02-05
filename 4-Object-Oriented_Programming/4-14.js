class BankAccount {
    balance = 0   //フィールドの名前と初期値をイコールでかける
    deposit(amount) {this.balance += amount} 
}
const harrysAccount = new BankAccount;
const sallysAccount = new BankAccount;

function invokelater(f, delay) {
    setTimeout(()=> f(delay), delay) //f(delay)でもうごく
}
invokelater(amount => harrysAccount.deposit(amount) , 1000)

depositInto = (account) => {
    return amount => account.deposit(amount) //アローにしないと正しくthisをバインドできない
} 
invokelater(depositInto(sallysAccount), 1000)