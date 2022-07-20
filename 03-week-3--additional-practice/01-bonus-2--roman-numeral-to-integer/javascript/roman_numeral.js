function romanNumeral(string) {
  // type your code here

  let total = 0   // a variable to store sum
  let idx = 0   // variable to move the index
  // const I = 1
  // const V = 5
  // const X = 10
  // const L = 50
  // const C = 100
  // const D = 500
  // const M = 1000

  const romanNumeralTable = {
    I: 1, 
    IV:4,
    V: 5, 
    IX: 9,
    X: 10, 
    XL:40,
    L: 50, 
    XC:90,
    C: 100, 
    CD: 400,
    D: 500, 
    CM: 900,
    M: 1000}  // create a hash table of roman numeral values

    while (idx < string.length) {   // loop through the length of the string
      const twoChar = string[idx] + (string[idx + 1] || '')   // create a variable that will either stroe the value of a numeral pairing or undefined

      if (romanNumeralTable[twoChar] !== undefined) {
        total += romanNumeralTable[twoChar];  // if the number is a numeral pair add the corresponding value from the hash table to the total
        idx += 2;   // increment the index by two
      } else { 
        total += romanNumeralTable[string[idx]]; // else add the value from the hash table to the total
        ++idx; // increment the index by one
      }
      
    }
    return total;
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

  console.log("");

  console.log("Expecting: 2100");
  console.log(romanNumeral('MMC'));

  console.log("");

  console.log("Expecting: 3");
  console.log(romanNumeral('III'));


  console.log("");

  console.log("Expecting: 502");
  console.log(romanNumeral('DII'));


module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
