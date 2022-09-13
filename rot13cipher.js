function rot13(str) {
  const arr = str.split("");
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  function rot13(a) {
    let toFind = alphabet.indexOf(a) + 13;
    if (toFind > alphabet.length - 1) {
      return toFind - alphabet.length;
    }
    return toFind;
  }

  let n = 0;
  const regex = /[A-Z]/g;
  let res = "";
  while (arr[n]) {
    if (arr[n].match(regex)) {
      res = res + alphabet[rot13(arr[n])];
    } else {
      res = res + arr[n];
    }
    n++;
  }
  return res;
}

console.log(rot13("SERR CVMMN!"));
