// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript

let alts = {
    1: [1,2,4],
    2: [1,2,3,5],
    3: [2,3,6],
    4: [1,4,7,5],
    5: [2,4,5,6,8],
    6: [3,5,6,9],
    7: [4,7,8],
    8: [5,7,8,9,0],
    9: [6,8,9],
    0: [0,8]
}


function getPINs(observed) {
  let oarray = ['']
  let narray = []
  for ( let i=0;i<observed.length; i++) {
    for (let j=0; j<oarray.length; j++) {
        for (let k=0;k<alts[observed[i]].length; k++) {
            narray.push(oarray[j]+alts[observed[i]][k]);
        }
    }
  oarray = narray.slice();
  narray.length=0;
    }
  console.log(oarray);
  return oarray;
}

getPINs('369');

/* 
Good code (This is the same logic executed better.):

function getPINs(observed) {
  return observed.split('')
  .map( t => ({
		'0': [ '0', '8' ],
    '1': [ '1', '2', '4' ],
    '2': [ '1', '2', '3', '5' ],
    '3': [ '2', '3', '6' ],
    '4': [ '1', '4', '5', '7' ],
    '5': [ '2', '4', '5', '6', '8' ],
    '6': [ '3', '5', '6', '9' ],
    '7': [ '4', '7', '8' ],
    '8': [ '5', '7', '8', '9', '0' ],
    '9': [ '6', '8', '9' ]
  }[t]))
  .reduce((pre, cur)=> [].concat.apply([], pre.map(t => cur.map(g => t + g))));
}


*/



/* 

iterating through array, iterating through old array, adding elements and correcting new array.

function return_new(arr,index) {

}

 */

/* 1357
1,2,4
3,2,6
2,5,4,6,8
4,7,8 */

/* A two dimensional array would allow to hold  */

/* At every loop point, there's a set of previous strings. 
You'd take those, add alternative characters then replace the old
set with the new set. So given a list of old strings, and a new character,
you'd update the old list by appending each character to the old list's 
contents and then replace it.
Would also need a way to store the key and the possible values such that 
I can use them.
one loop for iterating through the string
one loop for iterating through options
one loop for adding each alternative to each old string and storing alternatives.*/

/* Each loop can be converted into a single function. I'd like to do that. */