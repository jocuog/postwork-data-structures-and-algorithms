function distinctPairSum(arr, k) {
  // type your code here
  // given an input array and a target value  return all distinct pairs of consecutive numbers that add to the target. The order of the pairs in each pair does not matter. 
  // iterate through the array adding each pair and checking it against the target value
  // put any pair that meets the target that isnt already there into an array
  
  let targetPairs = [];

  

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
