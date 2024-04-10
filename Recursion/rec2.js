// print linearly from 1 to N;

function linear(i, n){
    if (i > n){
        return;
    }
    console.log(i);
    linear(++i, n);
}

linear(1, 5)