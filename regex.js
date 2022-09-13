let regex1 = /^\d{3}-\d{3}-\d{4}$/g; //555-555-5555
let regex2 = /^\(\d{3}\)\d{3}-\d{4}$/; //(555)555-5555
let regex3 = /^\(\d{3}\) \d{3}-\d{4}$/; //(555) 555-5555
let regex4 = /^\d{3} \d{3} \d{4}$/; //555 555 5555
let regex5 = /^\d{10}$/; //5555555555
let regex6 = /^\d{1} \d{3} \d{3} \d{4}$/; //1 555 555 5555

let totalregex = /^([1]\W?)?(\(\d{3}\)|\d{3})(-| )?\d{3}(-| )?\d{4}$/; //real answwer

let textStr = "555555";

console.log(totalregex.test(textStr));
// console.log(textStr.match(regex));
