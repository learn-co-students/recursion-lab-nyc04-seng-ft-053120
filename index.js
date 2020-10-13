// Code your solution here!
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length <= 1) {
    return string;
  }

  return reverseString(string.substring(1)) + string[0]
}

function isPalindrome(string) {
  if (string.length === 1) return true;
  if (string[0] !== string[string.length-1]) return false;
  
  return isPalindrome(string.substring(1, string.length-1))
}

function addUpTo(arr, idx) {
  if (idx === 0) {
    return arr[idx];
  }

  return arr[idx] + addUpTo(arr, idx - 1);
}

function maxOf(arr, idx=0, max=arr[0]) {
  if (idx === arr.length-1) return max;

  if (arr[idx] > max) max = arr[idx];

  return maxOf(arr, idx+1, max)
}

function includesNumber(arr, target, idx=0) {
  if (idx > arr.length-1) {
    return false;
  }

  if (arr[idx] === target) return true;
  return includesNumber(arr, target, idx + 1);
}