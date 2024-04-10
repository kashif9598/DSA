// Problem Statement: Given a number X,  print its factorial.

// To obtain the factorial of a number, it has to be multiplied by all the whole numbers preceding it. More precisely X! = X*(X-1)*(X-2) … 1.

// Note: X  is always a positive number.

// Examples:

// Example 1:
// Input: X = 5
// Output: 120
// Explanation: 5! = 5*4*3*2*1

// Example 2:
// Input: X = 3
// Output: 6
// Explanation: 3! = 3*2*1

function recursiveFact(n) {
  if (n === 1) return 1;
  return n * recursiveFact(n - 1);
}

console.log(recursiveFact((n = 3)));

// parameterized method
// function factorial(n, fact){
//     if (n<1){
//         console.log(fact);
//         return;
//     }
//     factorial(n-1, fact * n)
// }
// factorial(n=5, fact = 1)
