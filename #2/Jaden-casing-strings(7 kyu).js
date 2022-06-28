function toJadenCase(sentence) {
    return sentence.split(" ").map(word=>word[0].toUpperCase() + word.slice(1)).join(" ");
}
// How Can Mirrors Be Real If Our Eyes Aren't Real
console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))