// Problem Statement: Given an integer N, print the following pattern.
// * * *
// * * *
// * * *

function pattern1 (n) {
    let str = ""
    for (let i = 0; i< n; i++) {
        for (let j = 0; j < n; j++){
            str += "* "
        }
        str += "\n";
    }
    return str
    // console.log(str)
}

console.log(pattern1(n = 5))
