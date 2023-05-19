function checkCashRegister(price, cash, cid) {
  const currencyUnitValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let totalCID = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCID += cid[i][1];
  }
  totalCID = parseFloat(totalCID.toFixed(2));

  let changeDue = cash - price;

  if (changeDue > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (changeDue === totalCID) {
    return { status: "CLOSED", change: cid };
  } else {
    let change = [];
    for (let i = cid.length - 1; i >= 0; i--) {
      const currencyUnit = cid[i][0];
      const currencyUnitValue = currencyUnitValues[currencyUnit];
      let currencyUnitAmount = cid[i][1];
      let currencyUnitCount = currencyUnitAmount / currencyUnitValue;
      let currencyUnitToReturn = 0;

      while (changeDue >= currencyUnitValue && currencyUnitCount > 0) {
        changeDue -= currencyUnitValue;
        changeDue = parseFloat(changeDue.toFixed(2));
        currencyUnitAmount -= currencyUnitValue;
        currencyUnitCount--;
        currencyUnitToReturn++;
      }

      if (currencyUnitToReturn > 0) {
        change.push([currencyUnit, currencyUnitToReturn * currencyUnitValue]);
      }
    }

    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: change };
    }
  }
}

// Example test cases
console.log(
  checkCashRegister(
    19.5,
    20,
    [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ]
  )
);

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
