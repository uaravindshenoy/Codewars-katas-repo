function findEvenIndex(arr)
{
let rsum=0;
arr.forEach(e => { rsum+=e;    
});
 // console.log(rsum);
let lsum=0;
for (let i=0;i<arr.length;i++) {
  rsum-=arr[i];
if(lsum===rsum) {
return i;
}
lsum+=arr[i];

}
return -1;
}

/* 
https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
 */

/* Didn't use arr.reduce, found this interesting:
function findEvenIndex(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}
*/

/* 
const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));
*/