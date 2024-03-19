// Problem Statement: Given an integer N, print the following pattern : 
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1

function pattern6(n){
    let str = '';
    for(let i=1;i<=n;i++){
        for(let j=n;j>=i;j--){
            str += (n-j)+i;
        }
        str += '\n';
    }
    return str;
}
console.log(pattern6(n=6));