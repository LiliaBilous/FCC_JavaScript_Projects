function checkCashRegister(price, cash, cid) {
  let change = cash * 100 - price * 100;
  let cidSum = 0;
  for (let elem of cid) {
    cidSum += elem[1] * 100;
  }
  if (change > cidSum) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (change === cidSum) {
    return { status: "CLOSED", change: cid };
  } else {
    let result = [];
    cid = cid.reverse();
    let currencyUnit = {
      "ONE HUNDRED": 10000,
      TWENTY: 2000,
      TEN: 1000,
      FIVE: 500,
      ONE: 100,
      QUARTER: 25,
      DIME: 10,
      NICKEL: 5,
      PENNY: 1,
    };
    for (let elem of cid) {
      let moneyHolder = [elem[0], 0];
      elem[1] = elem[1] * 100;

      while (change >= currencyUnit[elem[0]] && elem[1] > 0) {
        change -= currencyUnit[elem[0]];
        elem[1] -= currencyUnit[elem[0]];
        moneyHolder[1] += currencyUnit[elem[0]] / 100;
      }
      if (moneyHolder[1] > 0) {
        result.push(moneyHolder);
      }
    }
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: result };
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
