function solution(s) {
  var answer = '';
  let newStr = s.split(' ')
  for (let i = 0; i < newStr.length; i++) {
          for (let j = 0; j < newStr[i].length; j++) {
              if (j % 2 === 0) answer += newStr[i][j].toUpperCase()
            else answer += newStr[i][j].toLowerCase()
          }
          if (i < newStr.length - 1)
              answer += ' '
  }
  return answer;
}


// 다른 사람 풀이
function toWeirdCase(s){
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})

}

// 또 다른 풀이
function toWeirdCase(s){
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}