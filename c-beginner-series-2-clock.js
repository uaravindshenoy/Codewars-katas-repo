function past(h, m, s){
    let hours = hoursToMilliseconds(h);
    let seconds = secondsToMilliseconds(s);
    let minutes = minutesToMilliseconds(m);
    return hours+minutes+seconds;
  };

  function hoursToMilliseconds(h) {
    return h*60*60*1000;
  };

  function minutesToMilliseconds(m) {
    return m*60*1000;
  };

  function secondsToMilliseconds(s) {
    return s*1000;
  };

/* https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/solutions/javascript */