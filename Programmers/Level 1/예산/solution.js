function solution(d, budget) {
  var answer = 0, count = 0;
  d.sort((a, b) => a - b)
  
  for (let i = 0; i < d.length; i++) {
      if (answer + d[i] <= budget) {
          answer += d[i]
          count++
      } 
  }
  return count;
}

// 다른 사람 풀이
function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

  return d.length;
}

// 고인물 풀이
function solution(d, budget) {
  return ~(~d.sort((a,b)=>a-b).map(v => budget -= v).findIndex(v => v < 0) || ~d.length);
}