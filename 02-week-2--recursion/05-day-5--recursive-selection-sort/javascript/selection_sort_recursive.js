function selectionSortRecursive(arr) {
  // type your code here
  if (arr.length === 0) { // if the array is empty then return empty array
    return [];
  } 

  const min = Math.min(...arr)  // Math.min gives the lowest valued element in the array
  const idx = arr.indexOf(min); // get the index of the element
  arr.splice(idx, 1); // replace one element at the index idx

  const result = selectionSortRecursive(arr);
  result.unshift(min); // add the element taken from the recursive call to the beginning of the array
  return result;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [1,2,3,4,5]");
  console.log("=>", selectionSortRecursive([2,5,4,3,1]));

  console.log("");

  console.log("Expecting: [6,7,8]");
  console.log("=>", selectionSortRecursive([8,7,6]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", selectionSortRecursive([]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
