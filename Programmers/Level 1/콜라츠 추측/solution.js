function solution(num) {
  let count = 0;    
  
  while (num !== 1) {
      if (num === 1) {
          return count
      }
      if (count === 500) {
          return -1
      }
      
      num = num % 2 === 0 ? num / 2 : num * 3 + 1
      count++

  }
  return count;
}


// 다른 사람 풀이
// 이게 원하는 형식의 코드였을거 같음.. 
function collatz(num) {
  var answer = 0;
  while(num !=1 && answer !=500){
      num%2==0 ? num = num/2 : num = num*3 +1;
  answer++;
}
  return num == 1 ? answer : -1;
}

// 고인물 버전

function collatz(num,count = 0) {
  return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}