// 실행시간 초과

function solution(id_list, report, k) {
  var answer = [];
  for (let i = 0; i < id_list.length; i++) {
      answer.push(0)
  }
  let arr = new Set(report)
  let reported = [...arr]
  // report[i].split(' ')[1]에 이름이 k 번 이상 담겼을 때 정지
  let suspendlist = {}
  for (let i = 0; i < reported.length; i++) {
      suspendlist[reported[i].split(' ')[1]] = (suspendlist[reported[i].split(' ')[1]] || 0) + 1
      // id_list 목록의 신고 횟수가 k 이상이면서
      // reported[i].split(' ')[0] === id_list[j] 이면
  }
  // 이 부분에서 개선점이 필요함
  for (let i = 0; i < id_list.length; i++) {
      for (let j = 0; j < reported.length; j++) {
          if (id_list[i] === reported[j].split(' ')[0] && suspendlist[reported[j].split(' ')[1]] >= k) {
            answer[i]++
          }
      }
  }
  
  return answer;
}

