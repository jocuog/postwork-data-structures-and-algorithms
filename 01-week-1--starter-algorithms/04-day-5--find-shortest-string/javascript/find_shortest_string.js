function findShortestString(arr) {
  // type your code here

  let shortestStr = [0];

  arr.forEach(string => {   // for each loop executes function comapring the length of each string in the array
    if (string.length < shortestStr.length) {
  }})
  return shortestStr;

// // alternate using reduce and ternary operator
// // reduce method uses the provided callback function on each elemetn in the array comparing the length of each element and uses a ternary operator to return the truthy value

// return arr.reduce((shortest, string) => 
// string.length < shortest.length ? string : shortest);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE

  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    findShortestString(['flower', 'juniper', 'lily', 'dadelion']);
  }

  const avgTime = (Date.now() - startTime) / 1000;
  console.log(avgTime);
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
