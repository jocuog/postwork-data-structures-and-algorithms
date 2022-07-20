function balancingParentheses(string) {
  // type your code here
  let result = 0
  let paranthesesO = 0
  let paranthesesC = 0

  const stringArr = string.split('')

  stringArr.forEach(el => {
    if (el === '(') {
      paranthesesO += 1
    }
    if (el === ')') {
      paranthesesC += 1
    }
    })
    if (paranthesesC === paranthesesO) {
      return 0
    }
    if (paranthesesC  > paranthesesO) {
      result = paranthesesC - paranthesesO
    }
    if (paranthesesC < paranthesesO) {
      result = paranthesesO - paranthesesC
    }
      return result
} 

function balancingParenthesesSol(string) {
  let missing = 0;
  let openings = 0;

  for (let i = 0; i < string.length; ++i) {
    if (string[i] === '(') {
      ++openings;
      continue;
    }

    if (openings > 0) {
      --openings;
    } else {
      ++missing;
    }
  }

  return missing + openings;
}

// const balancingParenthesesRecursive = (string) => {

//   const stringArr = string.split('')
//   let result = 0
//   let paranthesesO = 0
//   let paranthesesC = 0

//   if (stringArr.length === 0 ) {
//     return 
//   }
//   console.log(stringArr)
//   if (stringArr[0] === '(') {
//     paranthesesO += 1
//   }
//   if (stringArr[0] === ')') {
//     paranthesesC += 1
//   }

//   balancingParenthesesRecursive(stringArr[0])

//   if (paranthesesC === paranthesesO) {
//     return 0
//   }
//   if (paranthesesC  > paranthesesO) {
//     result = paranthesesC - paranthesesO
//   }
//   if (paranthesesC < paranthesesO) {
//     result = paranthesesO - paranthesesC
//   }
//   return result
// }

balancingParenthesesRecursive('(()())))(())((')

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));

  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())))(())(('));

  console.log("");

  console.log("Expecting: 3");
  console.log(balancingParentheses('())))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses('(()()))'));

  console.log("Expecting: 0");
  console.log(balancingParentheses(''));
}

function benchmark(callback) {
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    callback();
  }

  return (Date.now() - startTime) / 1000;
}

console.log("iterative", benchmark(() => balancingParentheses(')())(())((()(()(')))
console.log("iterative For Loop", benchmark(() => balancingParenthesesSol(')())(())((()(()(')))

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
