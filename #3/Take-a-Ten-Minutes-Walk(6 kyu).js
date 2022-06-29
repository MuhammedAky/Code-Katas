function isValidWalk(walk) {
    let directs =
    {
        n:0,
        s:0,
        e:0,
        w:0
    }

    if(walk.length == 10){
        walk.forEach(direct=>directs[direct]++)
        console.log(directs)
        return ((directs["n"]==directs["s"] && directs["e"]==directs["w"]));
    }else{
        return false;
    }

}


/*
    North: Kuzey
    South:Güney
    East:Doğu
    West:Batı


*/


console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))