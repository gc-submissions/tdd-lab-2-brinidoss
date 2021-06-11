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
    }

    giveChange() {
        // TODO return the correct change in the following format...
        //if else down below thanks to Kyle
        if (cashTendered >= 25) {
          this.cashTendered -= 25;
          obj.quarters++;
        } else if (this.cashTendered >= 10) {

        }
        return {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
    }
}

module.exports = ChangeHandler;