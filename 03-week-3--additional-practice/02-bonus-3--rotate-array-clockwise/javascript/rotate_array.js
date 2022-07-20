function rotateArray(arr, k) {
  // type your code here

  // rotate the array clockwise by taking the first element of the array and adding it to the end of the array

  for (let i = 0; i < k; i++) {
    let el = arr.pop()
    arr.unshift(el)
  }
  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
