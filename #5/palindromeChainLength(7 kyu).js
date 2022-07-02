var palindromeChainLength = function(n) {
    n        = n.toString();
    reverseN = [...n].reverse().join("");

    return Number(n) + Number(reverseN);
};

console.log(palindromeChainLength(89));