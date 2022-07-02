function maskify(cc) {
    cc = cc.split("");

    cc.map((c,i)=>{
        if(i<cc.length -4){
            cc[i] = "#";
        }
    })

    return cc.join("");
}


console.log(maskify('4556364607935616'));