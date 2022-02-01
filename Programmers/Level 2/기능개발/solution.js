function solution(progresses, speeds) {
  let answer = [];
  let beforeCommitDay = 0;

  progresses.map((a, i) => {
      let day = Math.ceil((100 - a) / speeds[i]);   

      if(day > beforeCommitDay) {
          answer.push(1)
          beforeCommitDay = day 
      }
      else {
          answer[answer.length - 1]++
      }
  })

  return answer;
}


// 다른 사람 풀이

function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let maxDay = days[0];

  for(let i = 0, j = 0; i< days.length; i++){
      if(days[i] <= maxDay) {
          answer[j] += 1;
      } else {
          maxDay = days[i];
          answer[++j] = 1;
      }
  }

  return answer;
}