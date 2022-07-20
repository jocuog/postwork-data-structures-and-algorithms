const isPrime = (n) => {

    if ( n < 2 ) {
        return false   // since one is not considered prime we can guard against that 
    }

    for (let i = 2; i < n; i++) {   // loop through starting at 2 becuase there is no need to include 1 and 0 
        if (n % i === 0) {
           // check to see if there is reamainder of any number didvied by i
        return false; 
        } 
    }

    return true;

}

if (require.main === module) {
    
    console.log("Expecting: true");
    console.log(romanNumeral(7));

    console.log("");

    console.log("Expecting: false");
    console.log(romanNumeral(6));

    console.log("");

    console.log("Expecting: false");
    console.log(romanNumeral(1));

    console.log("");

    console.log("Expecting: true");
    console.log(romanNumeral(11));

}

module.exports = isPrime;