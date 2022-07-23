function consecutiveSubstrings(string) {
  // type your code here
  let result = []
  for (i = 0; i < string.length; i++) {   // first loop for starting index
    // let fragment = string.charAt(i);
    // console.log("frag", fragment);
    // console.log("index", i);
    let substring = ''

      for (let j = i; j < string.length; j++) {   // second loop for generating substring
        substring += string.charAt(j);
        result.push(substring);
      }
      
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: ['j, jo, joh, john, o, oh, ohn, h, hn, n']");
  console.log("=>", consecutiveSubstrings('john'));

  console.log("");

  console.log("Expecting: ['b, bo, bob, o, ob, b']");
  console.log("=>", consecutiveSubstrings('bob'));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));

  console.log("");

}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
