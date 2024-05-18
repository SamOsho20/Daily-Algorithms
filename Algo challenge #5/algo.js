// // Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.z


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  
    // WE ARE TURNING X TO A STRING THEN SPLIT IT INTO A SUB STRING OF ARRAYS 
    // WE TG=HEN REVERSE ITS DIRECTION AND JOIN IT BACK TO A STRING
    let newX = x.toString().split('').reverse().join('')

    // WE ARE COMPARING IF NEWX AND X EQUAL EACH OTHER MAKING 
    // IT A PALINDROME AND RETURNING TRUE
    return newX == x

};

console.log(isPalindrome(100))