function solution(x) {
  var answer = true;
  
  let sum = x.toString().split('').map((el) => parseInt(el)).reduce((cur, acc) => cur + acc, 0)
  
  if (x % sum !== 0) answer = false
  
  return answer;
}


// 다른 사람 풀이
function Harshad(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

// 아니... 이건 좀 심하지 않나? 