function accum(s) {

    let result = "";

    for(let i=0;i<s.length;i++){
       for(let j=0;j<i+1;j++){
        if(j==0){
            result += s[i].toUpperCase()
        }else{
            result += s[i].toLowerCase();
        }
       }
       result += "-";
    }


    return result.slice(0,result.length-1);
}


// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }


console.log(accum("abcd")) // A-Bb-Ccc-Dddd
console.log(accum("NyffsGeyylB")) // A-Bb-Ccc-Dddd