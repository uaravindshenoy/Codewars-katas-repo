/* https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript */

function arrayDiff(a, b) {
    for (let i = 0; i < a.length; i++) {
      console.log(`the value of i is ${i} and the value of a there is ${a[i]}`);
      if (b.indexOf(a[i])>=0) {
        a.splice(i,1);
        i--;
      }
        console.log(`the value of i is ${i} and the value of a there is ${a[i]}`);
    }
      return a;
    }
    
    /*
    input: two arrays
    Output is first array without any elements that are in the second array.
    I'd have to walk through the elements in b, the second array, check each element in a if it is the element in B,
    and remove if it is.
    Splice method
    */