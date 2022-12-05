function persistence(num) {
    let ipt=num;
    if (num<10) return 0;
    let count=0;
    while (1) {
      let prd = 1;
      let nlist = (ipt.toString().split('')).map((e) => parseInt(e));
      nlist.forEach(e => { prd*=e; });
      count+=1;
      if (prd<10) return count;
      ipt=prd;
} 
 }
 console.log(persistence(999));

/* You'd want to use a do-while loop since you'd like it to run at least once.
This creates an edge case where count can be 0 or 1 using the do while. I could do it once
externally or scrap the do while loop and use a while loop with a simple condition.
*/


 /* 
 tried map function:

 function persistence(num) {
    let nlist = (num.toString().split('')).map((e) => parseInt(e));
    console.log(nlist);
 }
 persistence(999);
 */

 /* https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript */