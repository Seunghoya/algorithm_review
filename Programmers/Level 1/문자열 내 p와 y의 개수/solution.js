function solution(s){
  var answer = true;
  let cnt = 0
  let newStr = s.toUpperCase()	
  
  for (let i = 0; i < newStr.length; i++) {
      if (newStr[i] === 'P') cnt++
      if (newStr[i] === 'Y') cnt--
  }
  
  if (cnt === 0) return true
  else return false
  
}

// 다른사람 풀이
function numPY(s){
  //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

