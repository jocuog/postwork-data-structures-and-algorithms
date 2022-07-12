function findShortestStringRecursive(arr) {
  // type your code here
  if (arr.length === 1) {   // if the array contains only one element, return the first element
    return arr[0]; 
  }

  const result = findShortestStringRecursive(arr.slice(1)); // recusrively use the function and pass in the array starting at indexthe first element 

  return arr[0].length <= result.length ? arr[0] : result; // ternary goes through the stack and compares each element and returns either the first element or the result of the function
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));

  console.log("");

  console.log("Expecting: 'cat'");
  console.log("=>", findShortestStringRecursive(['cat']));

  console.log("");

  console.log("Expecting: 'e'");
  console.log("=>", findShortestStringRecursive(['e','tt','ada','dasfs','ff']));

  console.log("");

  console.log("Expecting: 'cat'");
  console.log("=>", findShortestStringRecursive(['cat', 'lamb', 'elephant', 'ship']));

  console.log("");

  console.log("Expecting: 'ee'");
  console.log("=>", findShortestStringRecursive(['ee', 'eeee','eeeeee','eeeeeee']));

  console.log("");

  console.log("Expecting: ''");
  console.log("=>", findShortestStringRecursive(['','ds','adsf','ddda','as']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
