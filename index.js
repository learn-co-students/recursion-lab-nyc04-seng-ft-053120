function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }
function reverseString(myString){
    if (myString.length<2){
            return myString
        }else{
            return reverseString(myString.substring(1)) + myString[0]
        }
    }
function isPalindrome(myString){
    let l= myString.length
    if(l<2){
        return true
    }else if(myString[0]===myString[l-1]){
        return isPalindrome(myString.substring(1, l-1))
    }else{
        return false
    }
}
function addUpTo(myArray, index){
return index? myArray[index]+addUpTo(myArray, --index) : myArray[index]
}
function maxOf(myArray){
    if(myArray.length<2){
        return myArray[0]
    }else{
        return Math.max(maxOf(myArray.slice(1)), myArray[0])
    }
}
function includesNumber(myArray, myNumber){
    if (myArray.length<1){
        return false
    }else if(myArray[0]===myNumber){
        return true
    }else{
        return includesNumber(myArray.slice(1), myNumber)
    }

}