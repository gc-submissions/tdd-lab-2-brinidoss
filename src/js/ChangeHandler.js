/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
      // TODO
      if (type === 'quarter') {
        this.cashTendered = this.cashTendered + 25;
      } else if (type === 'dime') {
        this.cashTendered = this.cashTendered + 10;
      } else if (type === 'nickel') {
        this.cashTendered = this.cashTendered + 5;
      } else if (type === 'penny') {
        this.cashTendered = this.cashTendered + 1;
      } 
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
      // TODO

      if (this.cashTendered < this.amountDue) {
        return false;
      } else if (this.cashTendered > this.amountDue) {
        return true;
      } else if (this.cashTendered === this.amountDue) {
        return true;
      } else {
        return false;
      }
    }

    giveChange() {
        // TODO return the correct change in the following format...
        //if else down below thanks to Kyle

        let coins = {
          quarters: 0,
          dimes: 0,
          nickels: 0,
          pennies: 0
        }
        if (this.cashTendered > this.amountDue) {
          //console.log(changeHandler32);
          this.cashTendered -= this.amountDue;
          this.amountDue -= this.amountDue;
        
        while (this.cashTendered > this.amountDue) {
          
          if (this.cashTendered >= 25) {
            //we have enough cashTendered to add at least one more quarter
            coins.quarters++;
            this.cashTendered -= 25;
          } else if (this.cashTendered >= 10) {
            coins.dimes++;
            this.cashTendered -= 10;
          } else if (this.cashTendered >= 5) {
            coins.nickels++;
            this.cashTendered -= 5;
          } else if (this.cashTendered >= 1) {
            coins.pennies++;
            this.cashTendered -= 1;
          }
        }
      }
        return coins;
        
        // {
        //     quarters: 0,
        //     dimes: 0,
        //     nickels: 0,
        //     pennies: 0
        // }
    }
}

// //breaking down 32 change
// const changeHandler32 = new ChangeHandler(10);
// console.log(changeHandler32);
// changeHandler32.insertCoin('quarter');
// changeHandler32.insertCoin('dime');
// changeHandler32.insertCoin('nickel');
// changeHandler32.insertCoin('penny');
// changeHandler32.insertCoin('penny');
// console.log(changeHandler32);
// console.log(changeHandler32.giveChange());
// console.log(changeHandler32);


module.exports = ChangeHandler;