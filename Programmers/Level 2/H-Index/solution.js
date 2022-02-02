function solution(citations) {
  // h-index 조건 = 전체 n편 중 인용된 횟수와 논문 갯수가 일치하면서 나머지 논문이 h번 이하 인용될 때의 최댓값

  var answer = 0;
  // 입력된 citations 배열을 내림차순으로 정렬
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (i < citations[i]) {
      answer++;
    }
  }
  
  return answer;
}


// 다른 사람 풀이

function solution(citations) {
  citations = citations.sort(sorting);
  var i = 0;
  while(i + 1 <= citations[i]){
      i++;
  }
  return i;


  function sorting(a, b){
      return b - a;
  }
}

// 또 다른 풀이
const solution = (citations) => citations.sort((a, b) => b - a).filter((el, idx) => el >= idx + 1).length;
