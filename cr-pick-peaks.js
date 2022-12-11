/* https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript */

function pickPeaks(arr){
    let peaks=[];
    let pos=[];
    let platpos;
    let platval;
    let platflag=0;
  for (let i=1; i<arr.length-1;i++) {
    if((arr[i]<arr[i-1])&&platflag)
    platflag=0; 
    if(arr[i]>arr[i-1]) {
      platflag=1;
      platpos=i;
      platval=arr[i];
    }
    if(arr[i]<arr[i+1]) platflag=0;
    if((arr[i]>arr[i+1])&&platflag) {
      pos.push(platpos);
      peaks.push(platval);
  
    }
    }
    return {pos,peaks};
}

/* 
Peak from plateu only counted at beginning. You'd want 
to loop through from the second value, comparing 
the currnt value with the previous and the next value.
map doesn't really let you do that as far as I know.

pseudocode: start | Loop start through array | compare current with previous and next
| If greater than previous and next, store value, position | if equal to previous continue
if equal to next and not equal to previous store | if equal to previous but greater than next
write | if equal to previous but less than next continue | return array.

We're returning arrays, so reduce won't work.

values I'm interested in checking for: peaks, plateaus. Plateaus in the beginning don't 
matter.
Neither do high values right at the start. Using an object to store plateu values looks
useful.
storing the values of a plateau until confirmation seems to be the play.
l c n
l<c
l>c
l=c
c<n
c=n
c>n
only interested in l<c, c>n. when l<c, you turn a flag, and then if c>n you store, if c<n you reset flag.
*/