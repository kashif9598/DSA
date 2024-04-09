// find gcd/hcf of two numbers
// n1 = 56; n2 = 98
// gcd/hcd; Output = 14
function gcd (a, b){
    while( a>0 && b>0){
        if (a>b) a = a%b;
        else b = b%a;
    }
    if (a ===0) return b;
    else return a;
}

console.log(gcd(n1 = 46, n2 = 51))

// function findMostRecentRequests(requests, k) {
//     // Reverse the array to start from the most recent requests
//     requests.reverse();

//     const recentRequests = new Set();
//     const result = [];

//     for (const request of requests) {
//         if (!recentRequests.has(request)) {
//             recentRequests.add(request);
//             result.push(request);

//             if (result.length === k) {
//                 break;
//             }
//         }
//     }

//     return result;
// }

// const n = 5;
// const requests = ["item1", "item2", "item3", "item1", "item3"];
// const k = 3;

// const mostRecentRequests = findMostRecentRequests(requests, k);
// console.log("Most recent requests:", mostRecentRequests);