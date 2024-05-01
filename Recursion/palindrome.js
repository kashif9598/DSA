// Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of the string is the same as the string.
// Example 1:
// Input: Str =  “ABCDCBA”
// Output: Palindrome
// Explanation: String when reversed is the same as string.

// Example 2:
// Input: Str = “TAKE U FORWARD”
// Output: Not Palindrome
// Explanation: String when reversed is not the same as string.

// function palindrome(s) {
//     let i =0;
//     let string = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     let n = string.length
//     if (i >= n/2) return true;
//     if (string[i] != string[n-i-1]) return false;
//     return palindrome(string)
// }

// const s = 'A man, a plan, a canal: Panama';
// console.log(palindrome(s));

// 2nd approach 
function palindrome(s){
    let newStr = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return newStr.split('').reverse().join('') === newStr ? true: false;
}
const s = 'TAKE U FORWARD';
console.log(palindrome(s));