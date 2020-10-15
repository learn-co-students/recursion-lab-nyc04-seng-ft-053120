// Code your solution here!
// function printString(myString) {
//     console.log(myString[0], myString[1], myString[2], myString[3], myString[4]);
//   }

function printString(myString) {
    console.log(myString[0]);
  
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length); //this store string every time until length == 1 withouth the first letter, each time one letter less
      printString(mySubString);
    } else {
      return true;
    }
  }

  printString("pizza");

  function reverseString(myString) {
      console.log(myString)
    if (myString.length < 2) {
      return myString;
    } else {
      return reverseString(myString.substring(1)) + myString[0];
    }
    //izza + p
    //zza + i
    //za + z
    //a + z
    //a
    // Once the recursion hits base case it will add everything and bubble back therefor return word backwards
    // a + z + z + i + p
    // returns azzip
  }

  console.log(reverseString("pizza"))

//   function isPalindrome() {

//   }


  function addUpTo(num) {
    let copy = num.slice()
    console.log(copy)

    if (num.length === 1 )
        {
            return num
        }
    else 
        {
         return copy.shift() + addUpTo(copy)
        }

        
  }