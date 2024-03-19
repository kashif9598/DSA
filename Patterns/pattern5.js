// Problem Statement: Given an integer N, print the following pattern : 
// * * * * * *
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

function pattern5(n){
    let str = "";
    for (let i=0;i<n;i++){
        for (let j=n;j>i;j--){
            str += '*';
        }
        str += '\n';
    }
    return str;
}

console.log(pattern5(n=6));