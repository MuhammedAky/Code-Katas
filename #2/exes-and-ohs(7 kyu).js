function XO(str) {
    let xCount = 0;
    let oCount = 0;
    const xRegexp = new RegExp('x', 'i');
    const oRegexp = new RegExp('o', 'i');
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      if (letter.match(xRegexp)) {
        xCount++;
      } else if (letter.match(oRegexp)) {
        oCount++;
      }
    }
    return xCount == oCount;
  }


console.log(XO("xxOo"));