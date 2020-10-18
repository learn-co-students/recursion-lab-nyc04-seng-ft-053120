function printString(str) {
  if (str.length === 1) {
    console.log(str[0])
    return;
  } else {
    console.log(str[0])
    return printString(str.slice(1))
  }
}

function reverseString(str) {
  return (str.length === 1) ? str : reverseString(str.slice(1)) + str[0]
}

function isPalindrome(str) {
  if (str.length <= 1) {
    return true
  } else {
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, str.length - 1))
  }
}

function addUpTo(arr, idx) {
  // sums all members up to a given index in an array
  if (idx === 0) return arr[0];
  return addUpTo(arr, idx - 1) + arr[idx]
}

function maxOf(arr) {
  // finds largest int of an array
  if (arr.length <= 1) return arr[0];
  return Math.max(arr.pop(), maxOf(arr))
}

function includesNumber(arr, num) {
  // returns true if num is present in arr

  if (arr.length === 1) {
    return arr[0] === num;
  } else {
    if (arr[0] === num) return true;
    return includesNumber(arr.slice(1), num)
  }
}
