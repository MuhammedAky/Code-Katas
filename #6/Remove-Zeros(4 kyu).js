function removeZeros(array) {
    arr = [];
    zeros = [];
    arrIndex = 0;
    zerosIndex = 0;

    for(var i=0;i<array.length;i++){
      if(array[i] != 0 || array[i] != "0" || array[i] === false || array[i] == null){
          arr[arrIndex] = array[i];
          arrIndex++;
        }else{
          zeros[zerosIndex] = array[i];
          zerosIndex++;
      }
    }

    
  
    for(var j=0;j<zerosIndex;j++){
        arr[arrIndex] = zeros[j];
        arrIndex++;
    }
  

    

    return arr;
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]))