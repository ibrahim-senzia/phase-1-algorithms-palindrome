function isPalindrome(word) {
  // Write your algorithm here

  // Step 1: Reverse the input string
  const reversedStr = str.split('').reverse().join('');

  // Step 2: Compare the original and reversed strings
  return str === reversedStr;
}

/*
  Pseudocode:
  1. Reverse the input string
  2. Compare the original and reversed strings
  3. Return true if they are the same, false otherwise
*/

/*
  Explanation:
  This solution first reverses the input string using the split, reverse, and join methods.
  Then, it compares the original string with the reversed string. If they are the same,
  the function returns true, indicating that the input string is a palindrome. Otherwise,
  it returns false.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
