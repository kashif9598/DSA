// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// brute force - using for loop
// function containsDuplicate(){
//     // sort in ascending order
//     nums.sort((a,b) => a-b);
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] === nums[i+1]){
//             return true;
//         }
//     }
//     return false;
// }


// better approach - using hashMap
// function containsDuplicate(nums){
//     let map = new Map();
//     for (let i=0;i<nums.length;i++){
//         if(map.has(nums[i])){
//             return true;
//         }
//         map.set(nums[i],i);
//     }
//     return false;
// }

//optimal - using set
// function containsDuplicate(nums){
//     let s = new Set(nums);
//     return s.size !== nums.length;
// }


let nums = [1,2,3,4];
console.log(containsDuplicate(nums));
