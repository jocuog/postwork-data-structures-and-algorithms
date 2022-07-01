function reverseString(str) {
  // type your code here
  // takes in a string and returns it in reverse order
  // creates a an empty array called result
  // split the input string into an array of elements
  // iterate through the array from the end to the beginning using a reverse for loop pushing each element into the results array
  // join the reversed array
  // return the joined reversed array which is now a string

  let strArr = str.split('');
  let result =[]
  for (i = strArr.length - 1; i >=0; i--) {
    result.push(strArr[i]);
    // console.log("reverse elements:", strArr[i]);
  }
  return result.join('');
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("Expecting: ''", reverseString(""));

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));


}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
