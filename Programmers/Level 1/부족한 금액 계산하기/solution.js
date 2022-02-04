function solution(price, money, count) {
  var answer = 0;
  for (let i = 1; i <= count; i++) {
      answer += price * i

  }
  if (answer <= money) return 0;
  answer = answer - money
  return answer;
}

// 다른사람 풀이
function solution(price, money, count) {
  const tmp = price * count * (count + 1) / 2 - money;
  return tmp > 0 ? tmp : 0;
}

// 또 다른 풀이
const solution = (..._) => Math.max(_[0]*_[2]*++_[2]/2-_[1], 0);



// 고인물이 아닌 사람의 풀이
function solution(price, money, count) {
  let answer = 0;

  for (let i = 1; i <= count; i++) {
      answer += price * i;
  }

  return answer > money ? answer - money : 0;
}