function solution(name) {
  let alphabet = [ '', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
  let alphabetSum = 0;
  
  for (let i = 0; i < name.length; i++) {
      let a = alphabet.indexOf(name[i]);
      if (alphabet.indexOf(name[i]) > 13) {
          a = alphabet.reverse().indexOf(name[i]);
      }
      else if (name[i] === 'A') {
          a = 0;
      }
      alphabetSum += a;
  }
  
  let alphabetCommend = alphabetSum;
  
  // 커서 이동 매커니즘 정리
  // left, right로 구분해서 정리
  // JAN이면 첫 글자에서 오른쪽으로 2번 가는것보다 왼쪽으로 한 번 이동하는 것이 최소 커맨드 입력
  // 아직 해결 못함...
  let cursorCommend = name.length - 1;
  for (let i = 0; i < name.length; i++) {
      if (name[i] === 'A') {
          // 'A' 일때 left랑 right 구분하는 로직이 필요한듯?
      }
  }

  return cursorCommend + alphabetCommend;
}