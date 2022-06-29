function iqTest(numbers){
    numbers = numbers.split(" ");

    let even = {
        count:0,
        lastIndex:-1
    };

    let odd = {
        count:0,
        lastIndex:-1
    };


    numbers.forEach((number,i)=>{
        if(number % 2 == 0){
            even.count++;
            even.lastIndex = i+1;
        }else{
            odd.count++;
            odd.lastIndex = i+1;
        }
    })


    if(even.count == 1){
        return even.lastIndex;
    }else{
        return odd.lastIndex;
    }


}

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 2"));