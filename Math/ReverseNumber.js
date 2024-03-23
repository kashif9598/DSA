// Problem Statement: Given a number N reverse the number and print it.
// Example 1:
// Input: N = 123
// Output: 321
// Explanation: The reverse of 123 is 321

// Example 2:
// Input: N = 234
// Output: 432
// Explanation: The reverse of 234 is 432

function reverseNumber(n){
    let rev = 0;
    while(n!=0){
        let digit = n%10;
        rev = rev * 10 + digit;
        n = Math.floor(n/10);
    }
    return rev;
}

console.log(reverseNumber(n=234));
