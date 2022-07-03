function songDecoder(song) {
    return song.split("WUB").filter(word=>word.trim()).join(" ");
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))