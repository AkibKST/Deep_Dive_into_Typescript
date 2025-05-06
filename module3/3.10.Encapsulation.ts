{
  // Encapsulation in TypeScript
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

      private getBalance() {
        return this._balance;
      }

      // private method can be accessed from another method of the same class
      // this is a private method, so it can only be accessed from within this class
      getHiddenBalance() {
        return this.getBalance(); //accessing private method from another method of the same class
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

    const myBalance = poorManAccount.getHiddenBalance();
    console.log(myBalance);
    //
  }

  //
}
