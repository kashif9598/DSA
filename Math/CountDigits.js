// Problem Statement: Given an integer N, write a program to count the number of digits in N.
// Example 1:
// Input: N = 12345
// Output: 5
// Explanation: N has 5 digits

// Example 2:
// Input: N = 8394
// Output: 4
// Explanation: N has 4 digits

function countDigits(n) {
    let count = 0;
    while(n!=0){
        n=Math.floor(n/10);
        count++;
    }
    return count;
}

console.log(countDigits(n=8394));