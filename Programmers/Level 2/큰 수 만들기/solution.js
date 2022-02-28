function solution(number, k) {
  var answer = '';
  let stack = [], count = 0
  
  for (let i = 0; i < number.length; i++) {
      while (stack.length !== 0) {
          // 제거 할 숫자들이 모두 제거되면 break로 반복문을 탈출한다.
          if (count === k) break
          // stack의 마지막 숫자가 현재 숫자보다 작을 경우 stack의 마지막 숫자 제거
          else if (stack[stack.length - 1] < number[i]) {
              count++
              stack.pop()
          }
          else break
      
      }
      // stack에 number[i]를 담아준다.
      stack.push(number[i])
  }

  // k개 만큼 모두 제거하지 못한 경우가 있기 때문에 stack을 뒤에서 k개 만큼 제거한 값을 answer에 담아서 리턴해준다.
  answer = stack.join('').slice(0, number.length - k)
  return answer;
}

// 다른 사람 풀이
function solution(number, k) {
    const answer = []
    let head = 0
    let del = k

    answer.push(number[head++])
    while(answer.length < number.length - k || head < number.length) {
        if(del && answer[answer.length-1] < number[head]) {
            answer.pop()
            del--
            continue
        }
        answer.push(number[head++])
    }

    return answer.slice(0, number.length - k).join('')
}

// stack 오랜만이라 좀 많이 헤맸는데, 다시 자료구조 공부 해야겠다...