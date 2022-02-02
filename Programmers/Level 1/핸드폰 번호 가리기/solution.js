function solution(phone_number) {
  var answer = '';
  let len = phone_number.length
  
  for (let i = 0; i < len - 4; i++) {
      answer += '*'
  }
     answer = answer + phone_number.slice(-4)
  
  return answer;
}

// 다른 사람 풀이
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 이런거 볼때마다 좀 현타마려움...

function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);

  return result;
}