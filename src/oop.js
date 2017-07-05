
class Account  {
    /**
     * @description {defines an details perculiar to each account}
     * @param {string} holder 
     * @param {number} acctNumber 
     * @param {number} balance 
     * @param {number} creditLine 
     */
    constructor(holder, acctNumber, balance, year = new Date().getFullYear(), creditLine) {
        this._Holder = holder;
        this._Number = acctNumber;
        this._Balance = balance;
        this._Creditline = creditLine;
        this._Year = year;
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
        if (this._Balance - amount < this._Creditline) {
            console.log("Insufficient Balance");
            return false;
        } else {
            this._Balance -= amount;
            return true;
        }
    }
    getYear() {
        return this._Year
    }
    /**
     * @description {returns the current balance in the account}
     * @return {number}
     */
    balance() {
        return this._Balance;
    }
    /**
     * 
     * @param {new Account} target 
     * @param {number} amount 
     */
    transfer(target, amount) {
        if (this._Balance - amount < this._Creditline) {
            console.log("Coverage Insufficient")
            return false;
        } else {
            this._Balance -= amount;
            target._Balance += amount;
            return true
        }
    }
}

class SavingsAccount extends Account {
     constructor(holder, acctNumber, balance, year, creditLine = 1000){
         super(holder, acctNumber, balance, year, creditLine);
     }
}

class CurrentAccount extends Account {
    constructor(holder, acctNumber, balance, year, creditLine = 5000) {
        super(holder, acctNumber, balance, year, creditLine)
    }
}

class FixedDeposit extends Account {
    constructor(holder, acctNumber, balance, year, creditLine = 100000) {
        super(holder, acctNumber, balance, year, creditLine);
    }
    getStartYear() {
        if (new Date().getFullYear() < this.getYear() + 10) {
            return false
        }
        return true;
    }
    transfer(target, amount) {
        if(this.getStartYear() === true) {
            if (this._Balance - amount < this._Creditline) {
                return "Coverage Insufficient";
            } else {
                this._Balance -= amount;
                target._Balance += amount;
                return true
            }
        } else {
            return "Account is still frozen";
        }
    }
}
let lowerClass = new SavingsAccount("David", 66464847, 2000);
let middleClass = new CurrentAccount("Melody", 16273844, 30000);
let highClass = new FixedDeposit("Richard", 456478389, 40000000);

console.log(lowerClass.balance());
console.log(highClass.transfer(middleClass, 10000));
console.log(middleClass.balance());