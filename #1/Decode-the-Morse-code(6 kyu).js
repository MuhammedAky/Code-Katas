decodeMorse = function(morseCode){
    // splits words at 3 spaces
    return morseCode.split('   ').reduce((sentence, codedWord, index, codeWordArray) => {
      // split codedWord into individual codes
      return sentence + codedWord.split(' ').reduce((word, code) => {
        // convert code to letter/digital/symbol
        return word + (MORSE_CODE[code] || '');
      }, '') + (index < codeWordArray.length - 1 ? ' ' : '');
    }, '').trim();
}