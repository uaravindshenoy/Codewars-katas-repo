function solution(number){
    if(number<0) {return 0;}
    return som(number-1,5)+som(number-1,3)-som(number-1,15);
   }
   
   function som(num,factor) {
     let dividend= (num-num%factor)/factor;
     let sum= dividend*(dividend+1)/2;
     return sum*factor;
  
   }
   
solution(10);


/* 
function solution(number){
  if (number<0) {
    return 0;
  }
  let sum=0;
  for (let i=1; i<=number; i++) {
    if(i%5==0) {
      sum+=i;
    }
    else if (i%3==0) {
      sum+=i
    }
    return sum;
  }
}
didn't work.
*/

/* 
function solution(number){
  let m5= (number-number%5)/5;
  let m3= (number-number%3)/3;
  let m15= (number-number%15)/15; 
}

function result(val, mult) {
  sum=0;
  for(let i=1;i<=val,i++){
    sum+=i;
  }
  
}

changed my mind.
*/

/* 
https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
 */