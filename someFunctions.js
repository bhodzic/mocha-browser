function pow(x, n) {
    if ((n < 0) || (Math.round(n) != n)) return NaN;
    if (n == 1) return x;
    return x * pow(x, n - 1);
}

function factorial(x) {
    if ((x < 0) || (Math.round(x) != x)) return NaN;
    if (x == 0) return 1;
    return x * factorial(x - 1);
}

function palindrome(x) {
    if(!x.length) return false;
    for(let i=0;i<x.length/2;i++){
        if(x[i]!=x[x.length-1-i]){
            return false;
        }
    }
    return true;
}