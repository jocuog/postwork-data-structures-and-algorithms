function selectionSort(arr) {
  // type your code here

  const sorted = [];  // create a new array for the sorted elements

  while (arr.length > 0) {  // loop through the array while the array has length greater then zero
    const min = Math.min(...arr); // variable that holds the minimum value present in the array with the 'in' operator (...)
    const index = arr.indexOf(min); // assign the index of the element with the smallest value

    sorted.push(min); // push the element with the smallest value into the sorted array
    arr.splice(index, 1); // replace one element in beginning of the array 
  }

  return sorted; // return the sorted array
}   

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  
  console.log("Expecting: []");
  console.log(selectionSort([]));

  console.log("");

  console.log("Expecting: [-1]");
  console.log(selectionSort([-1]));

  console.log("");

  console.log("Expecting: [-10, 2, 2, 3, 7]");
  console.log(selectionSort([3, 2, 2, 7, -10]));

  console.log("");

  console.log("Expecting: [100, 200]");
  console.log(selectionSort([100, 200]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = new Date(); // creates a new starting time with the current time

  for (let i =0; i < 1000; ++i) {
    selectionSort([2,1]);
    selectionSort(longInput); 
}
}
  const avgTime = (Date.now() - startTime) / 2000;

  console.log(avgTime);

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
