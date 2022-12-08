/* Divisable either by 5 or 3 */

 function eitherNotBoth(num) {
    if (divisable(num,3)&&divisable(num,5))return false;
    else if (!divisable(num,3)&&!divisable(num,5)) return false;
    return true;
    }
    
    function divisable(num,divisor) {
        return num%divisor==0;
    }