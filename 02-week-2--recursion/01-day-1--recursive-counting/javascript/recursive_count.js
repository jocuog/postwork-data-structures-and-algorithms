function recursiveCount(num = 0) {
  // type your code here
  if (num >= 10) {    // base case for ten frames in the stack
    return
    }
    console.log(num)
    recursiveCount(num + 1)   // call recursive method at the end of the function
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
