function distinctPairSum(arr, k) {
  // type your code here
  // given an input array and a target value  return all distinct pairs of consecutive numbers that add to the target. The order of the pairs in each pair does not matter. 
  // iterate through the array adding each pair and checking it against the target value
  // put any pair that meets the target that isnt already there into an array
  
  const targetPairs = {}; // create a hash pbject to hold pairs

  arr.slice(0, -1).forEach((num, idx) => {  // slice out the pair the beginning of the array and iterate 
    const nextValue = arr[idx + 1];   // create a variable to hold the next value
    
    if (num + nextValue === k &&  // condition to see if the number(first element) and the next value (second element)
      targetPairs[num] === undefined && // and if num is not in the hash object
      targetPairs[nextValue] === undefined) { // and if nextValue is not in the hash object
      targetPairs = [num + nextValue]; // put the value pairs in the hash object
      }
  })

  return Object.values(targetPairs)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
