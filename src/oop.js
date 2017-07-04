class Account  {
    /**
     * @description {defines an details perculiar to each account}
     * @param {string} holder 
     * @param {number} acctNumber 
     * @param {number} balance 
     * @param {number} creditLine 
     */
    constructor(holder, acctNumber, balance, creditLine = 10000) {
        this.Holder = holder;
        this.Number = acctNumber;
        this.Balance = balance;
        this.Creditline = creditLine;
    }
    /**
     * @description {amount increments value of Balance}
     * @param {number} amount 
     */
    deposit(amount) {
        this.Balance += amount;
    }
    /**
     * @description {decrements Balance by amount}
     * @param {number} amount
     * @return {boolean} 
     */
    withdraw(amount) {
        if (this.Balance - amount < this.Creditline) {
            console.log("Insufficient Balance");
            return false;
        } else {
            this.Balance -= amount;
            return true;
        }
    }
    /**
     * @description {returns the current balance in the account}
     * @return {number}
     */
    balance() {
        return this.Balance;
    }
    /**
     * 
     * @param {new Account} target 
     * @param {number} amount 
     */
    transfer(target, amount) {
        if (this.Balance - amount < this.Creditline) {
            console.log("Coverage Insufficient")
            return false;
        } else {
            this.Balance -= amount;
            target.Balance += amount;
            return true
        }
    }
}