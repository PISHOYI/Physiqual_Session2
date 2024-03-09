class Bank {
    constructor(name, age, balance, address) {
        this.name = name;
        this.age = age;
        this.balance = balance;
        this.address = address;

        if (typeof address !== 'object' ||
            !address.hasOwnProperty('city') ||
            !address.hasOwnProperty('street') ||
            !address.hasOwnProperty('buildingNumber') ||
            !address.hasOwnProperty('apartmentNumber')) {
            console.log("The address must be an object with properties: city, street, buildingNumber, apartmentNumber");
        }
    }

    // Methods
    accountInfo = function () {
        console.log(this.name, this.balance);
    }



    deposit(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount <= 0 || amount === null) {
                    reject("Amount must be greater than 0");
                } else {
                    this.balance += amount;
                    resolve(`Successfully deposited $${amount}`);
                }
            }, 1000);
        });
    }

    addAmount(amount) {
        if (amount !== 0 && amount !== null) {
            this.balance += amount;
            return `New balance: $${this.balance}`;
        } else {
            return "Amount must be greater than 0";
        }
    }

    OuterbalanceCompare() {
        return async (amount) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (amount > this.balance) {
                        reject("Not enough money in your account.");
                    } else {
                        resolve("Your amount is enough in your account.");
                    }
                }, 1000);
            }).then(message => {
                if (message === "Your amount is enough in your account") {
                    this.withdraw(amount);
                }
            }).catch(error => console.error(error));
        }
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawal successful. New balance: ${this.balance}`);
        } else {
            console.log("You don't have enough money.");
        }
    }
}
