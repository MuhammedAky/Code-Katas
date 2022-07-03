function digital_root(n) {
    while (n > 9) {
      n = n.toString().split('').reduce((sum, digit) => sum + +digit, 0);
    }
    return n;
}

console.log(digital_root(942));