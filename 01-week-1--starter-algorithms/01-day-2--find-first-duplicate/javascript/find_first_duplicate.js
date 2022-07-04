function findFirstDuplicate(arr) {
  // type your code here

  let elementsSet = new Set(); // This new Set object allows the storgae of each element from the given arrat as a unique value and check if it alreadt contains a value using Set.add() and Set.has(elementsSet).

  for ( let i = 0; i < arr.length; i++) { // looping through the given array
    if (elementsSet.has(arr[i])) return arr[i]; // check to see if the Set already contains the element that we are on currentlt on in the loop. if it exists return that value
    elementsSet.add(arr[i]); // if the element is not in the Set add the element to the Set and move to the next element in the array
  } 
    return -1; // if no duplicates are found return -1
}

function findFirstDuplicateAlt(arr) {
  for (i = 0; i < arr.length; i++) { // loop through the array by element
    if (arr[Math.abs(arr[i])-1]<0)  // look up the value of the index minus 1,if the value of the index is negative already
      return Math.abs(arr[i]); // return the absolute value of the index
    else {
      arr[Math.abs(arr[i])-1] = -arr[Math.abs(arr[i])-1]; // every element index in the array -1 and then making it negative
    }
  }
  return -1; // if no duplicates are found return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("Expecting: 1");
  console.log("=>", findFirstDuplicate([2, 1, 3, 1, 3, 2, 4, 1]));

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
  
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicateAlt([2, 1, 3, 3, 2]));

  console.log("Expecting: 1");
  console.log("=>", findFirstDuplicateAlt([2, 1, 3, 1, 3, 2, 4, 1]));

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicateAlt([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
