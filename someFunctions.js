function pow(x, n) {
    if ((n < 0) || (Math.round(n) != n)) return NaN;
    if (n == 1) return x;
    return x * pow(x, n - 1);
}

function factorial(x) {
    if ((x < 0) || (Math.round(x) != x)) return NaN;
    if (x == 1) return x;
    return x * factorial(x - 1);
}

function palindrome(x) {

}