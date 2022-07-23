function consecutiveSubstrings(string) {
  // type your code here
  let result = [];

  for (let i = 0; i < string.length; i++) {
    let fragment = string.charAt(i);
    console.log("frag", fragment);
    console.log("index", i);
    
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
