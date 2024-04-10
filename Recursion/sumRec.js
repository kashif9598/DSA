// Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.

// Examples:

// Example 1:
// Input: N=5
// Output: 15
// Explanation: 1+2+3+4+5=15

// Example 2:
// Input: N=6
// Output: 21
// Explanation: 1+2+3+4+5+6=15
// let i = 0;

// my way
// function sum (n) {
//     if(n <= 0) return;
//     i = i+n;
//     sum(--n)
//     return i;
// }
// console.log(sum(n=5))

// parameterised way
// function summation (n, sum) {
//     if(n<1){
//         console.log(sum);
//         return;
//     }
//     summation(n-1, sum + n)
// }
// summation(n = 5, sum = 0)

// functional method
function summation(n) {
  if (n === 0) return 0;
  return n + summation(n - 1);
}
console.log(summation((n = 5)));
