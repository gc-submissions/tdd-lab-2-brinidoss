const ChangeHandler = require("../src/js/ChangeHandler");
const changeHandler1 = new ChangeHandler(50); //for the constructors
const changeHandlerQuarter = new ChangeHandler(); //for the quarter
const changeHandlerDime = new ChangeHandler();  //for the dime
const changeHandlerNickel = new ChangeHandler();  //for the nickel
const changeHandlerPenny = new ChangeHandler();  //for the penny
const changeHandlerCallAgain = new ChangeHandler();
const changeHandlerDifferentCoins = new ChangeHandler();


changeHandlerQuarter.insertCoin('quarter');
changeHandlerDime.insertCoin('dime');
changeHandlerNickel.insertCoin('nickel');
changeHandlerPenny.insertCoin('penny');

changeHandlerCallAgain.insertCoin('quarter');
changeHandlerCallAgain.insertCoin('quarter');
changeHandlerCallAgain.insertCoin('quarter');
changeHandlerCallAgain.insertCoin('quarter');

changeHandlerDifferentCoins.insertCoin('quarter');
changeHandlerDifferentCoins.insertCoin('dime');
changeHandlerDifferentCoins.insertCoin('nickel');
changeHandlerDifferentCoins.insertCoin('penny');



describe("ChangeHandler", function() {
  test("class is defined", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });

  //constructor
  //amountDue is set based on an argument
  test('amountDue set based on argument', () => {
    expect(changeHandler1.amountDue).toEqual(50);
  });

  //cashTendered set to zero
  test('cashTendered set to zero', () => {
    expect(changeHandler1.cashTendered).toEqual(0);
  });

  test('inserting a quarter adds 25', () => {
    expect(changeHandlerQuarter.cashTendered).toEqual(25);
  });

  test('inserting a dime adds 10', () => {
    expect(changeHandlerDime.cashTendered).toEqual(10);
  });

  test('inserting a nickel adds 5', () => {
    expect(changeHandlerNickel.cashTendered).toEqual(5);
  });

  test('inserting a penny adds 1', () => {
    expect(changeHandlerPenny.cashTendered).toEqual(1);
  });

  test('calling function continues to add', () => {
    expect(changeHandlerCallAgain.cashTendered).toEqual(100);
  });

  test('calling function continues to add - different coins', () => {
    expect(changeHandlerDifferentCoins.cashTendered).toEqual(41);
  })
  // TODO: Add additional tests below...


});

/*
Required Test Cases 


isPaymentSufficient:
  Returns true if cashTendered more than amountDue.
  Returns false if cashTendered less than amountDue.
  Returns true if cashTendered equal to amountDue.
giveChange:
  32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.
  10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0.
  27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.
  68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3.
*/
