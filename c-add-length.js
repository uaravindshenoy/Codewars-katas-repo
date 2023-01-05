function addLength(str) {
    let arrayOfWords = str.split(" ");
    //console.log(arrayOfWords);
   

    for( let i=0; i< arrayOfWords.length; i++) {
        arrayOfWords[i]+=" "+arrayOfWords[i].length;
    }

    return arrayOfWords.map(x => x+" "+x.length)

    //console.log(arrayOfWords);
    }
    
 addLength("Three bears in the woods");

    /* https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript */