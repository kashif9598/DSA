// print N to 1 (backtrack) (i-1) not allowed
function revLinearBacktrack(i, n) {
    if (n < i) return;
    revLinearBacktrack(i+1 ,n);
    console.log(i);
}
revLinearBacktrack(1, 5)