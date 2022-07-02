function countSmileys(arr) {
    let count = 0;
  
    const eyes = {
      ':': true,
      ';': true
    };
  
    const noses = {
      '-': true,
      '~': true
    };
  
    const mouths = {
      ')': true,
      'D': true
    };
  
    for (let i = 0; i < arr.length; i++) {
      const face = arr[i];
      if (face.length == 2) {
        if (eyes[face[0]] && mouths[face[1]]) {
          count++;
        }
      } else if (face.length == 3) {
        if (eyes[face[0]] && noses[face[1]] && mouths[face[2]]) {
          count++;
        }
      }
    }
  
    return count;
  }
<<<<<<< HEAD
  
=======


>>>>>>> c0d862afc174552444f94254d67a24cb6bc90c07
console.log(countSmileys([':D',':~)',';~D',':)']));