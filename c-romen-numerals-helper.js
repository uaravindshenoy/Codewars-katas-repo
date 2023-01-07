/* https://www.codewars.com/kata/51b66044bce5799a7f000003/javascript */

const RomanNumerals = {
  toRoman : function (number) {
    // convert the number to a string, take each digit, check with numbers, return the value added to the start of the string.
    // There's an issue in that 20 is XX not II. A better approach would be to consider the position of the digit as well.
    // have to think of this in terms of sums. There's a limited number of cases.
    let stringToCovert = number.toString();
    let stringToReturn = '';
    let digit = 1;
    for(let i = stringToCovert.length-1; i >= 0; i--) {
        stringToReturn = RomanNumerals.numbers[digit][stringToCovert[i]] + stringToReturn;
        console.log(`string is ${stringToReturn}`);
        digit*=10;
    };
    return stringToReturn;
  },
  fromRoman : function (string) {
// Have to start from last index, checking if the previous 
//index is lesser. If so, sum changes by difference, i--.
//base case is if length is one.
if(string.length === 1) {
    return RomanNumerals.values[string];
}
let sum = 0;
for( let i = string.length - 1; i >= 0; i--) {
    // first case is if there's a negative number.
    if ( i!=0 && RomanNumerals.values[string[i-1]] < RomanNumerals.values[string [i]]) {
        sum += RomanNumerals.values[string[i]] - RomanNumerals.values[string[i-1]];
        i--;
    }
    else {
        sum += RomanNumerals.values[string[i]];

    }
}
return sum;
},
  values : {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000,
    },
    numbers : {
 1: {'0':'','1':'I','2':'II','3':'III','4':'IV','5':'V','6':'VI','7':'VII','8':'VIII','9':'IX'},
 10: {'0':'','1':'X','2':'XX','3':'XXX','4':'XL','5':'L','6':'LX','7':'LXX','8':'LXXX','9':'XC'},
 100: {'0':'','1':'C','2':'CC','3':'CCC','4':'CD','5':'D','6':'DC','7':'DCC','8':'DCCC','9':'CM'},
 1000: {'1':'M','2':'MM','3':'MMM'}
    }
}

console.log(RomanNumerals.fromRoman('MMCMXCIX'));
console.log(RomanNumerals.toRoman(2999));

/* 
from roman:

An eval would be adequate, but figuring out where to put 
stuff. You'd want to read from left to right, and if at 
any point you come across a greater value than the ones 
you've read, you'd want to subtract the ones you've gone 
over from it. If there's no greater value, than it's simple 
addition. A way I can think of it is to break things into 
clusters of subtraction and add those.
Or split into array, if you come across a greater value, 
split there. Otherwise just get on with addition.
starting from the right and moving left sounds good.
symbols can only be reapeated up to three times.
I don't know how to add priority if I'm storing this stuff as an object.

you're checking where there's a comparison change. if so far
the numbers have been rising and the number suddenly falls,

to roman:
integer division from the largest digit to the smallest digit.

I don't know exactly how to change numbers. for instance, at 
which point do you go from forward to backward? VIII becomes 
IX but when does that happen for larger digits?
you can add more than two values but can only subtract one 
value.

4kyu seems really hard, I'd like to try 5 kyu instead. that 
being said I'll try it for this pomodoro.

the ones part till five and tens part till 50 is a group.So is hundreds up to 500.
I'd like to erase parts of this and do it again.
*/

/* 
Really good answer:
// TODO: create a RomanNumerals helper object
var numerals = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1]
];

RomanNumerals = {
  toRoman: function(v) {
    var s = '';
    numerals.forEach(function(n) {
      while (v >= n[1]) {
        s += n[0];
        v -= n[1]; 
      }
    });
    return s;
  },
  fromRoman: function(s) {
    var v = 0;
    numerals.forEach(function(n) {
      while (s.substr(0, n[0].length) == n[0]) {
        s = s.substr(n[0].length);
        v += n[1];
      }
    });
    return v;
  }
};
*/