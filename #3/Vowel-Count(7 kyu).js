// function getCount(str) {
//     let count = 0;
//     let vowels = ["a", "e", "i", "o", "u"];

//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             count++;
//         }
//     }


//     return count;
// }


function getCount(str){
    let vowels = ["a", "e", "i", "o", "u"];
    return str.split("").filter(letter=> vowels.includes(letter)).length;
}

console.log(getCount("abracadabra")==5);