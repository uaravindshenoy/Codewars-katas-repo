decodeMorse = function(morseCode){
    // Your code here
    // You can use MORSE_CODE[morse]
    let txt='';
    let words = morseCode.trim().split('   ');
    for (let i=0;i<words.length;i++) {
        let letters = words[i].split(' ');
        for (let j=0;j<letters.length;j++) {
            txt+=MORSE_CODE[letters[j]];
        }
        txt+=" ";
    }
return txt.substring(0,txt.length-1);
    }   

/* 
https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
 */