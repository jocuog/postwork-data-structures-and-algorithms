function romanNumeral(string) {
  // type your code here
  const splitStr = string.split('');  // split the string into array

  let total = 0
  const I = 1
  const V = 5
  const X = 10
  const L = 50
  const C = 100
  const D = 500
  const M = 1000

  splitStr.forEach(el =>  {
    
  })
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
