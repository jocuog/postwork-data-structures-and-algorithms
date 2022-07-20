function rotateArray(arr, k) {
  // type your code here

  // rotate the array clockwise by taking the first element of the array and adding it to the end of the array

  for (let i = 0; i < k; i++) {
    let el = arr.pop()
    arr.unshift(el)
  }
  return arr
}

function rotateArrayAlt(arr, k) {
  const rotations = k % arr.length;
  const removed = arr.splice(arr.length - rotations, rotations);

  return removed.concat(arr);
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

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log(rotateArray([1, 2, 3], 0));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log(rotateArray([1, 2, 3], 5));

  console.log("");

  console.log("Expecting: []");
  console.log(rotateArray([], 7));
}


function benchmark(callback) {
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    callback();
  }

  return (Date.now() - startTime) / 1000;
}


console.log("mine", benchmark(() => rotateArray([2, 3, 4, 1, 4, 56, -2, 20],6)))
console.log("theirs", benchmark(() => rotateArrayAlt([2, 3, 4, 1, 4, 56, -2, 20],6)))

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
