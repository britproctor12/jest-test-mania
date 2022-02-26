export class BankAccount {
    constructor() {
        this.balance = 0
        this.amount = 0


    }

    open() {

        if (this.balance) {
            throw new ValueError
        }
        else {
            this.balance = 0
        }

    }

    close() {
        if (isNaN(this.balance)) {
            throw new ValueError
        }
        else {
            this.balance = NaN
        }



    }

    getBalance() {
        if (isNaN(this.balance)) {
            throw new ValueError
        }
        else {
            return this.balance
        }
    }

    deposit(amount) {
        if (isNaN(this.balance)) {
            throw new ValueError
        }
        else {
            this.balance += amount
        }



    }

    withdraw(amount) {
        if (isNaN(this.balance)) {
            throw new ValueError
        }
        else {
            this.balance -= amount
        }


    }
}

export class ValueError extends Error {
    constructor() {
        super('Bank error occured')

    }
}
