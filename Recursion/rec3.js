// print from N to 1;
function revLinear(i, n){
    if (n < i){
        return;
    }
    console.log(n);
    revLinear(i, --n)
}
revLinear(1, 5);