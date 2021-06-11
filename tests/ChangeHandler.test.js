const ChangeHandler = require("../src/js/ChangeHandler");
const changeHandler1 = new ChangeHandler(50); //for the constructors
const changeHandlerQuarter = new ChangeHandler(); //for the quarter
const changeHandlerDime = new ChangeHandler();  //for the dime
const changeHandlerNickel = new ChangeHandler();  //for the nickel
const changeHandlerPenny = new ChangeHandler();  //for the penny
const changeHandlerCallAgain = new ChangeHandler();
const changeHandlerDifferentCoins = new ChangeHandler();
const changeHandlerLessThan = new ChangeHandler(50);
const changeHandlerMoreThan = new ChangeHandler(50);
const changeHandlderEqualTo = new ChangeHandler(50);
const changeHandler32 = new ChangeHandler(10);
const changeHandler10 = new ChangeHandler(10);
const changeHandler27 = new ChangeHandler(10);
const changeHandler68 = new ChangeHandler(10);
const changeHandler0 = new ChangeHandler(10);

const change32 = {
  quarters: 1,
  dimes: 0,
  nickels: 1,
  pennies: 2
}
const change10 = {
  quarters: 0,
  dimes: 1,
  nickels: 0,
  pennies: 0
}
const change27 = {
  quarters: 1,
  dimes: 0,
  nickels: 0,
  pennies: 2
}

const change68 = {
  quarters: 2,
  dimes: 1,
  nickels: 1,
  pennies: 3
}

const change0 = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
}

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

changeHandlerLessThan.insertCoin('dime');
changeHandlerMoreThan.insertCoin('quarter');
changeHandlerMoreThan.insertCoin('quarter');
changeHandlerMoreThan.insertCoin('dime');
changeHandlderEqualTo.insertCoin('quarter');
changeHandlderEqualTo.insertCoin('quarter');

changeHandler32.insertCoin('quarter');
changeHandler32.insertCoin('dime');
changeHandler32.insertCoin('nickel');
changeHandler32.insertCoin('penny');
changeHandler32.insertCoin('penny');

changeHandler10.insertCoin('dime');
changeHandler10.insertCoin('dime');

changeHandler27.insertCoin('quarter');
changeHandler27.insertCoin('dime');
changeHandler27.insertCoin('penny');
changeHandler27.insertCoin('penny');

changeHandler68.insertCoin('quarter');
changeHandler68.insertCoin('quarter');
changeHandler68.insertCoin('quarter');
changeHandler68.insertCoin('penny');
changeHandler68.insertCoin('penny');
changeHandler68.insertCoin('penny');

changeHandler0.insertCoin('dime');

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
  });

  test('iPS returns fale if cT less than aD', () => {
    expect(changeHandlerLessThan.isPaymentSufficient()).toEqual(false);
  });

  test('iPS returns true if cT more than aD', () => {
    expect(changeHandlerMoreThan.isPaymentSufficient()).toEqual(true);
  });

  test('iPS returns true if cT equal to aD', () => {
    expect(changeHandlderEqualTo.isPaymentSufficient()).toEqual(true);
  });

  //giveChange tests

  test('32 change', () => {
    expect(changeHandler32.giveChange()).toEqual(change32);
  });

  test('10 change', () => {
    expect(changeHandler10.giveChange()).toEqual(change10);
  });

  test('27 change', () => {
    expect(changeHandler27.giveChange()).toEqual(change27);
  });

  test('68 change', () => {
    expect(changeHandler68.giveChange()).toEqual(change68);
  });

  test('0 change', () => {
    expect(changeHandler0.giveChange()).toEqual(change0);
  });

});

/*
Required Test Cases 



giveChange:
test all types of coins and 0
  32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.
  10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0.
  27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.
  68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3.
*/
