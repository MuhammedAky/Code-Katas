function DNAStrand(dna){
    const complementary = {
        A:"T",
        T:"A",
        G:"C",
        C:"G",
    };

    let compliment = "";

    dna.split("").forEach(acid=>{
        compliment += complementary[acid];
    })


    return compliment;
}

console.log(DNAStrand("ATTGC"));