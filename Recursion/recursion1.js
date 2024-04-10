//print name N times


function Name(i, n) {
    if (i > n){
        return;
    }
    console.log('Kashif');
    Name(i+1, n);
}

Name(1, 5)