function fibonacci(num) {
  // type your code here
  // create variables a=0 and b=1, representing the beginning of series
  // if num is less than 2 return num
  // create a variable fn=a+b representing the sum 
  // loop fn = a+b, a=b, b=fn
  // return fn

    let a = 0;
    let b = 1;
    let fn = a+b;

  if (num < 2) {
    return num 
  }

  for( i = 0; i < (num-1); i++ ) {
    fn = a + b;
    a = b;
    b = fn;
    
  }
  return fn
}

function fibo(num) {    // given solution work through

  if (num < 2) {
    return num      // if starting num is less than 2 then that is the value that should be returned
  }

  let lasTwo = [0,1];   // varibale with an array of 0 and 1 as starting values

  for (let i = 0; i < (num-1); i++) {   // loop through num number of times
    const sum = lasTwo[0] + lasTwo[1];  // varibale that adds the values in the current and next indeces
    lasTwo = [lasTwo[1], sum] // moves to the next set of indeces
  }
  return lasTwo[1]; // return the value of the index of 1 in the variable which will be the last number in the fibonacci series
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

  console.log("Expecting: 0");
  console.log("=>", fibo(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibo(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibo(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
