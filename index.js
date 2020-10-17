// Code your solution here!

function printString(string) {
    console.log(string[0])

    if (string.length === 1) {
        return
    } else {
        printString(string.slice(1))
    }
}

function reverseString(string, index = string.length - 1) {
    if (index === 0) {
        return string[index]
    } else {
        return string[index] + reverseString(string, index - 1)
    }
}

function isPalindrome(string) {
    if (string[0] !== string[string.length-1]) {
        return false
    }

    if (string.length === 1) {
        return true
    } else {
        return isPalindrome(string.slice(1, string.length-1))
    }
}

function addUpTo(array, target, index = 0) {
    if (index === target) {
        return array[target]
    } else {
        return array[index] + addUpTo(array, target, index + 1)
    }
}

function maxOf(array) {
    if (array.length === 1) {
        return array[0]
    } else {
        return Math.max(array[0], maxOf(array.slice(1)))
    }
}

function includesNumber(array, target) {
    if (array[0] === target) {
        return true
    }
    if (array.length === 1) {
        return false
    } else {
        return includesNumber(array.slice(1), target)
    }
}