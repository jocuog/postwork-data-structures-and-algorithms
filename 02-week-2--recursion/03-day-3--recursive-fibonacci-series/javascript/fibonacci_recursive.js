function fibonacci(n) {
  // type your code here
  // sequence is an array that begins 0,1
  // each element is the sum of the two elements preceding it


  if (n<2) {
    return n;
  } 

  return fibonacci(n-1) + fibonacci(n - 2);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("Expecting: 13");
  console.log("=>", fibonacci(7));

  console.log("Expecting: 3");
  console.log("=>", fibonacci(4));

}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
