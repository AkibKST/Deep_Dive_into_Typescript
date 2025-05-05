{
  //access modifiers

  class BankAccount {
    readonly id: number;
    name: string;
    protected _balance: number; //when i want to use this property from another class which is extends this class

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  //create a student acc which is extends BankAccount class
  class StudentAcc extends BankAccount {
    test() {
      // this.
    }
  }

  const poorManAccount = new BankAccount(111, "Poor", 30);
  poorManAccount.addDeposit(300);

  const myBalance = poorManAccount.getBalance();
  console.log(myBalance);
  //
}
