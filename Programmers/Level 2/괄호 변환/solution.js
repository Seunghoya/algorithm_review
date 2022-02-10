function solution(p) {
  var answer = '';
  // 입력이 빈 문자열일 경우, 빈 문자열 반환
  if (p.length === 0) return ''
  
  let left = 0, right = 0, u, v;
  
  for (let i = 0; i < p.length; i++) {
      // 주어진 문자열을 u,v로 분리
      if (p[i] === '(') left++
      if (p[i] === ')') right++
      
      if (left === right) {
          left = 0
          right = 0
          u = p.slice(0, i + 1)
          v = p.slice(i + 1)
          break;
      }
  }
  
  let count = 0
  for (let i = 0; i < u.length; i++) {
      
      if (u[i] === '(') count++
      if (u[i] === ')') count--

      if (count < 0) {
          let str = ''
          str += `(${solution(v)})`;
          
          for (let j = 1; j < u.length - 1; j++) {
              if (u[j] === '('){
                  str += ')'
              }
              else str += '('
          }
          return str
      }
  }
  return u + solution(v);
}

// 다른사람 풀이

function reverse(str) {
  return str.slice(1, str.length - 1).split("").map((c) => (c === "(" ? ")" : "(")).join("");
}

function solution(p) {
  if (p.length < 1) return "";

  let balance = 0;
  let pivot = 0;
  do { balance += p[pivot++] === "(" ? 1 : -1 } while (balance !== 0);

  const u = p.slice(0, pivot);
  const v = solution(p.slice(pivot, p.length));

  if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
  else return "(" + v + ")" + reverse(u);
}