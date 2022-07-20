const isPrime = (n) => {

    if ( n < 2 ) {
        return false   // since one is not considered prime we can guard against that 
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {   // loop through starting at 2 becuase there is no need to include 1 and 0. using the Math.sqrt method reduces the number of iterations becuase we dont need to run through all possible divisible numbers less than n
        if (n % i === 0) {
           // check to see if there is reamainder of any number didvied by i
        return false; 
        } 
    }

    return true;

}

if (require.main === module) {
    
    console.log("Expecting: true");
    console.log(isPrime(7));

    console.log("");

    console.log("Expecting: false");
    console.log(isPrime(6));

    console.log("");

    console.log("Expecting: false");
    console.log(isPrime(1));

    console.log("");

    console.log("Expecting: true");
    console.log(isPrime(11));

}

module.exports = isPrime;