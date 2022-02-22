function solution(s) {
  var answer = '';
  let index = s.length / 2
  if (s.length % 2 === 0) {
      answer = s.slice(index - 1, index + 1)
  } else {
      answer = s.charAt(s.length / 2 + 1)
  }
  return answer;
}

// 다른 사람 풀이

function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

