function likes(names) {
    let txt ='';
 switch(names.length) {
    case 0: txt="no one likes this";break;
    case 1: txt= names[0]+" likes this";break;
    case 2: txt= names[0]+" and "+names[1]+" like this";break;
    case 3: txt=names[0]+", "+names[1]+" and "+names[2]+" like this";break;
    default: txt= names[0]+", "+names[1]+" and "+(names.length-2)+" others like this";
 }
 return txt;
  }

  /* https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript */