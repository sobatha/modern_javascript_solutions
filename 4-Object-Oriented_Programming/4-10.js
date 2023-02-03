class BankAccount {
    balance = 0   //フィールドの名前と初期値をイコールでかける
    deposit(amount) {this.balance += amount} 
}

class SavingsAccount extends BankAccount {
    static percentOf(amount, rate) { return amount * rate / 100 } //静的メソッド、つまりはコンストラクタのプロパティになる
    addInterest(rate) {
        super.deposit(SavingsAccount.percentOf(this.balance, rate))
    }
}

class CheckingAccount extends BankAccount {
    static OVERDRAFT_FEE = 30
    static FEE = 5

    withdraw(amount) {
        if (this.balance < (amount + CheckingAccount.FEE)) {
            this.balance -= CheckingAccount.OVERDRAFT_FEE
        } else {
            this.balance -= amount + CheckingAccount.FEE
        }
    }
}