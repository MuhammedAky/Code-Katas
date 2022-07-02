function findEvenIndex(arr){

    const sum = (arr,start,end) => {
        let sum = 0;
        for(var i = start;i<end;i++){
            sum += arr[i]
        }

        return sum;
    }

    for(var i = 0;i<arr.length;i++){
        console.log("i: " + i)
        console.log("Left Sum: " + sum(arr,0,i));
        console.log("Right Sum: " + sum(arr,i+1,arr.length));
        console.log("-----------------")

        if(sum(arr,0,i) == sum(arr,i+1,arr.length)){
            return i;
        }
    }

    return -1;
}

console.log(findEvenIndex([1,2,3,4,5,6]))