// Problem Statement: Given a number, check whether it is prime or not. A prime number is a natural number that is only divisible by 1 and by itself.
// Example 1:
// Input: N = 3
// Output: Prime
// Explanation: 3 is a prime number

// Example 2:
// Input: N = 26
// Output: Non-Prime
// Explanation: 26 is not prime
function primeNumber(n) {
    for (let i = 2; i< n;i++){
        if(n%i === 0){
            return false;
        }
    }
    return true
}
console.log(primeNumber(3))