// Problem Statement: Given a number, check if it is Armstrong Number or Not.
// Example 1:
// Input:153 
// Output: Yes, it is an Armstrong Number
// Explanation: 1^3 + 5^3 + 3^3 = 153

// Input:170 
// Output: No, it is not an Armstrong Number
// Explanation: 1^3 + 7^3 + 0^3 != 170

function armstrong(n) {
    let dup = n;
    let num = 0;
    while(n!=0){
        let digit = n%10;
        num = num + (digit * digit * digit);
        n = Math.floor(n/10);
    }
    return dup === num ? true : false
}

console.log(armstrong(n=170));