function telephoneCheck(str) {
  let regex1 = /^\d{3}-\d{3}-\d{4}$/g; //555-555-5555
  let regex2 = /^\(\d{3}\)\d{3}-\d{4}$/; //(555)555-5555
  let regex3 = /^\(\d{3}\) \d{3}-\d{4}$/; //(555) 555-5555
  let regex4 = /^\d{3} \d{3} \d{4}$/; //555 555 5555  5555555555
  let regex5 = /^\d{10}$/; //5555555555 1 555 555 5555
  let regex6 = /^\d{1} \d{3} \d{3} \d{4}$/; //1 555 555 5555

  if (
    regex1.test(str) ||
    regex2.test(str) ||
    regex3.test(str) ||
    regex4.test(str) ||
    regex5.test(str) ||
    regex6.test(str)
  ) {
    return true;
  }

  return false;
}

console.log(telephoneCheck("1 555-555-5555"));
