function solution(s) {
  var answer = 0;
  
  let str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  
  for (let i = 0; i < str.length; i++) {
      // s = s.replace(str[i], i) 같은 숫자가 있을 때 중복 변경이 안됨
      s = s.replace(new RegExp(str[i], "g"), i)
      answer = s
  }
  
  return parseInt(answer);
}

// 다른사람 풀이
function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for(let i=0; i< numbers.length; i++) {
      let arr = answer.split(numbers[i]);
      answer = arr.join(i);
  }

  return Number(answer);
}

