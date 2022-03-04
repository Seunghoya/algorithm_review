function solution(s) {
  var answer = '';
  let arr = []; 
  s = s.toLowerCase().split(" ");

  for (let i = 0; i < s.length; i++) {
      arr.push(s[i].substr(0, 1).toUpperCase() + s[i].substr(1, s[i].length).toLowerCase());
  }
  answer = arr.join(" ");

  return answer;
}



// 다른사람 풀이
function solution(s) {
  var answer = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i-1] === " ") {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}


// 또 다른 풀이
function solution(s) {
  return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}