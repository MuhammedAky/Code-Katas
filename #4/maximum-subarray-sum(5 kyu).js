var maxSequence = function (arr) {
    // place keep track of currentSum // initialize to 0
    let currentSum = 0;
    // place to keep track of maxSum // initialize to 0
    let maxSum = 0;
  
    // iterate over array
    for (let i = 0; i < arr.length; i++) {
      const currentNumber = arr[i];
      // set currentSum to max of currentSum + currentNumber and 0
      currentSum = Math.max(currentSum + currentNumber, 0);
      // set maxSum to max of currentSum and maxSum
      maxSum = Math.max(currentSum, maxSum);
    }
  
    return maxSum;
}