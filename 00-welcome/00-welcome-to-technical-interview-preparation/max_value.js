const maxValue = (nums) => {
    // create a function that will return the highest value in an array

    // solve wihtout using any built in arrays

    let max = -Infinity // create a variable that any number will be larger than

    nums.forEach(el => {
        if (el > max) { 
            max = el;
        }
    })
    return max;

}

if (require.main === module) {

  console.log("Expecting: 44");
  console.log(maxValue([24,26,35,44]));

  console.log("");

  console.log("Expecting: 223");
  console.log(maxValue([201,154,223,36]));

  console.log("");

  console.log("Expecting: 3848");
  console.log(maxValue([500, 3848, 0, -659]))
    
}

module.exports = maxValue;