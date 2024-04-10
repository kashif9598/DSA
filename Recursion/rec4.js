// print from 1 to N (backtrack) (i+1) not allowed
function linearBackTrack(i, n){
    if(i < 1) return;
    linearBackTrack(i-1, n);
    console.log(i);
}
linearBackTrack(5, 5)