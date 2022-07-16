// Paste your iterative and recursive solutions in this file
// And then calculate their average run times to compare them.
function selectionSortRecursive(arr) {
  // type your code here
  if (arr.length === 0) { // if the array is empty then return empty array
    return [];
  } 

  const min = Math.min(...arr)  // Math.min gives the lowest valued element in the array
  const idx = arr.indexOf(min); // get the index of the element
  arr.splice(idx, 1); // remove one element at the index idx

  const result = selectionSortRecursive(arr);
  result.unshift(min); // add the element taken from the recursive call to the beginning of the array
  return result;

}

function selectionSort(arr) {
  const sorted = [];
  
  while (arr.length > 0) {
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);

    sorted.push(min);
    arr.splice(idx,1);
  }

  return sorted;
}

function benchmark(callback) {
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    callback();
  }

  return (Date.now() - startTime) / 1000;
}

console.log("iterative", benchmark(() => selectionSort([2, 3, 4, 1, 4, 56, -2, 20])))
console.log("recursive", benchmark(() => selectionSortRecursive([2, 3, 4, 1, 4, 56, -2, 20])))
