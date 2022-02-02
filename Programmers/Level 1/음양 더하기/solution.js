function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i < signs.length; i++) {
      if (signs[i]) {
          answer += absolutes[i]
      }
      else {
          answer -= absolutes[i]
      }
  }
  
  return answer;
}

// 다른사람 풀이
function solution(absolutes, signs) {

  return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
