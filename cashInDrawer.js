function checkCashRegister(price, cash, cid) {
  let cashUnit = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let changeToCompare = +(cash - price).toFixed(2);
  let change = changeToCompare;
  let total = 0;
  let cidNums = cid
    .flat()
    .filter((el) => typeof el === "number")
    .reverse();
  // let cidNums = cidNums.reverse();
  let cidStr = cid
    .flat()
    .filter((el) => typeof el === "string")
    .reverse();
  let standardArr = [];
  cidStr.forEach((el) => {
    let a = [];
    a.push(el);
    a.push(0);
    standardArr.push(a);
  });

  let finalArr = standardArr;

  cidNums.forEach((element) => {
    total = total + element;
  });

  let idx = cashUnit.findIndex((el, id) => el <= change && cidNums[id] != 0);

  let res = [];
  while (change > 0 && cidNums[idx] >= cashUnit[idx]) {
    if (change >= cashUnit[idx]) {
      cidNums[idx] = Math.ceil(cidNums[idx] - cashUnit[idx]);
      finalArr[idx][1] = +(finalArr[idx][1] + cashUnit[idx]).toFixed(2);
      change = (change - cashUnit[idx]).toFixed(2);
      res.push(cashUnit[idx]);
    } else {
      idx++;
    }
    if (cidNums[idx] === 0 && change > 0) {
      idx++;
    }
  }

  const toShow = finalArr.filter((el) => el[1] > 0);
  if (total < changeToCompare || change != 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };
  }

  if (total == changeToCompare) {
    return {
      status: "CLOSED",
      change: finalArr.reverse(),
    };
  }

  if (total > changeToCompare) {
    return {
      status: "OPEN",
      change: toShow,
    };
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
