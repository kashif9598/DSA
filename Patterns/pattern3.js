// Problem Statement: Given an integer N, print the following pattern : 
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6

function pattern3(n){
    let str="";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            str +=j;
        }
        str +='\n'
    }
    return str;
}

console.log(pattern3(n=3));