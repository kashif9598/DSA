// Problem Statement:  Given a number check if it is a palindrome.

// An integer is considered a palindrome when it reads the same backward as forward.


// Example 1:
// Input: N = 123
// Output: Not Palindrome Number
// Explanation: 123 read backwards is 321.Since these are two different numbers 123 is not a palindrome.

// Example 2:
// Input: N =  121 
// Output: Palindrome Number
// Explanation: 121 read backwards as 121.Since these are two same numbers 121 is a palindrome.

function palindrome(n){
    let numToCheck = n;
    let rev = 0;
    while(n!=0){
        let digit = n%10;
        rev = rev * 10 + digit;
        n = Math.floor(n/10);
    }
    if (rev === numToCheck){
        return 'Palindrome Number'
    } else {
        return 'Not Palindrome Number'
    }
}

console.log(palindrome(n = 1221));