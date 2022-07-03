function findOdd(array) {
    var letters = {};

    for(var i=0;i<array.length;i++){
        let current = array[i];
        if(!letters[current]){
            letters[current] = 1;
        }else{
            letters[current]++;
        }
    }

    for(letter in letters){
        if(letters[letter] % 2 != 0){
            return Number(letter);
        }
    }

}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5,5,5,5,5]));