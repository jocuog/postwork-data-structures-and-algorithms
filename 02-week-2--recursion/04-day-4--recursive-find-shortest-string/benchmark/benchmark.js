// Paste your iterative and recursive solutions in this file
// And then calculate their average run times to compare them.

function findShortestStringRecursive(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const result = findShortestStringRecursive(arr.slice(1));

  return arr[0].length <= result.length ? arr[0] : result;
}


function benchmark(callback) {
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    callback(findShortestStringRecursive(['flower', 'juniper', 'lily', 'dadelion']));
  }

  return (Date.now() - startTime) / 1000;
}
