function scramble(str1, str2) {

    const letterCounts = {};

    for(var i=0;i<str1.length;i++){
        letterCounts[str1[i]] = letterCounts[str1[i]] || 0;
        letterCounts[str1[i]]++;
    }


    for(var i=0;i<str2.length;i++){
        if(letterCounts[str2[i]] > 0){
            letterCounts[str2[i]]--;
        }else{
            return false;
        }
    }

    return true;

}

console.log(scramble('rkqodlw','world') == true);
console.log(scramble('cedewaraaossoqqyt','codewars') == true);
console.log(scramble('katas','steak') == false);
console.log(scramble('scriptjavx','javascript') == false);
console.log(scramble('scriptingjava','javascript') == true);
console.log(scramble('scriptsjava','javascripts') == true);
console.log(scramble('javscripts','javascript') == false);
console.log(scramble('jscripts','javascript') == false);
console.log(scramble('aabbcamaomsccdd','commas') == true);
console.log(scramble('commas','commas') == true);
console.log(scramble('sammoc','commas') == true)