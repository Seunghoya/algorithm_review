function solution(n, arr1, arr2) {
  // 출력값 보고 n만큼 빈 문자열 미리 넣어두기
  var answer = new Array(n).fill('')

  let twoArr1 = [], twoArr2 = [];
  
  for (let i = 0; i < n; i++) {
      twoArr1.push(arr1[i].toString(2).padStart(n,0).split(''))
      twoArr2.push(arr2[i].toString(2).padStart(n,0).split(''))
    
      for (let j = 0; j < n; j++) {
          if (twoArr1[i][j] === '1' || twoArr2[i][j] === '1') {
              answer[i] += '#'
          }
          else answer[i] += ' '
      }
  }
  return answer;
}

// 다른 사람 풀이 
function solution(n, arr1, arr2) {
  let num1, num2, s;
  let answer = [];
  //manually turning decimals to binaries cos i can!
  for (let i=0; i<n; i++){
      num1 = arr1[i];
      num2 = arr2[i];
      s = '';
      for (let j=0; j<n; j++){
          s = (num1%2 + num2%2) ? '#'+s : ' '+s;
          num1 = Math.floor(num1/2);
          num2 = Math.floor(num2/2);
      }
      answer.push(s);
  }    
  return answer;
}

// 고인물 풀이...

function solution(n, arr1, arr2) {
  return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
  return '0'.repeat(n - s.length) + s;
}


// 썩은물 풀이..

var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))

// 썩은물 v2

function solution(n, arr1, arr2) {
  return arr1.map((i, index) =>('0'.repeat(n) + (i | arr2[index]).toString(2)).slice(-n)).map(i => i.replace(/0/g, ' ').replace(/1/g, '#'));
}