function solution(list){
    let start=0;
    let end=0;
    let seq=false;
    let output=""
    for(let i=0; i<list.length; i++) {
        if((seq==false)&&(list[i]+1==list[i+1])&&(list[i]+2==list[i+2])) {
            seq=true;
            start=i;
        }
        else if ((seq==false)) {
            output+=`,${list[i]}`;
        }
        if((seq==true)&&(list[i]!==list[i+1]-1)) {
            end = i;
            output+=`,${list[start]}-${list[end]}`;
            seq=false;
        }
    }
    return output.slice(1,);
   }


   solution([1,2,3,79,4,5,8,9,10]);
   /* 
   https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
   */

   /* 
   I'd want to set things up so that it iterates, looks for at least three values in a row, 
   assigns a start value, looks for the final value where it remains consecutive,
   and then appends the value.
   if there is a sequence, set seq to true, then set the start value, 
   I would want the start to be set first, if it's not a start, and it's not in sequence, 
   append the value, and if it's in sequence and the last value, append the appropriate
   chain.
   append value, and if it is in sequence, check if it's the final value, or just continue.
   
   used map with reduce method, I'd like to look into that.
   
   function solution(individualIntegers) {
	return individualIntegers
		.reduce(splitIntoRanges, [])
		.map(convertToRange)
		.join(",");
}

function splitIntoRanges(ranges, number) {
	if (!ranges.length) {
		ranges.push([number]);
		return ranges;
	}

	var lastRange = ranges[ranges.length - 1];
	var lastNumber = lastRange[lastRange.length - 1];

	number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
	return ranges;
}

function convertToRange(range) {
	return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}
   */