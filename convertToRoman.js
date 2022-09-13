function convertToRoman(num) {
  const nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const chars = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  //checking the given number is exact equal to roman number
  const idd = nums.findIndex((el) => el === num);
  if (idd > 0) {
    return chars[idd];
  }

  //filtering the largest numberset smaller than given number
  let idx = nums.findIndex((el) => el > num);

  //if the given number is greater than largest numberset
  if (idx < 0) {
    idx = nums.length;
  }

  let test = num;
  let x = 1;
  let res = "";

  while (test > 0) {
    if (test >= nums[idx - x]) {
      test = test - nums[idx - x];
      res = res + chars[idx - x];
    } else {
      x++;
    }
  }

  return res;
}

console.log(convertToRoman(40));
