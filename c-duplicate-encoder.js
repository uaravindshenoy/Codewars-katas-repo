// set the value to be ( the first time, noting down the index, the second time and over, swap to ).


/* working solution: */

let letters = {};

function duplicateEncode(word){
output=""
word = word.toLowerCase();
for(let i=0;i<word.length;i++) {
  letters.hasOwnProperty(word[i])? letters[word[i]]=')' : letters[word[i]]="(";
}
for(let i=0;i<word.length;i++) {
  output+=letters[word[i]];
}
for (var member in letters) 
{delete letters[member]};
  word = output;
  return word;

}
duplicateEncode("recede");

/* Turned out that the object was holding on to values from previous iterations.
*/