function isLeapYear(year: number): boolean{
  var answer = true;
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0){
        answer = true;
      } else {
        answer = false;
      }
    } else {
      answer = true;
    }
  }
  else{
    answer = false;
  }
  return answer;
}

export default isLeapYear