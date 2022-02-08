function solution(n) {
  // 10진법 수 n을 3진법으로 바꾼 뒤 reverse해서 다시 10진법 수로 바꾼다.
  var answer = 0;

  let three = n.toString(3).split('').reverse().join('')
  answer = parseInt(three, 3)

  return answer;
}

// 다른 사람 풀이
function solution(n) {
  const answer = [];
  while(n !== 0) {
      answer.unshift(n % 3);
      n = Math.floor(n/3);
  }
  return answer.reduce((acc,v,i) => acc + (v * Math.pow(3, i)),0);   
}



