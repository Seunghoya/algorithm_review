function solution(nums) {
  var answer = 0;
  
  // num 배열에서 num/2만큼의 숫자를 선택할 때 최대 선택가능한 숫자의 갯수를 리턴
  let newArr = nums.filter((element, index) => {
      return nums.indexOf(element) === index;
  });
  
  if (newArr.length <= nums.length / 2) answer = newArr.length
  else answer = nums.length / 2
  return answer;
}

// 알아둘 만한 내용
// 배열 중복 제거할 때 new Set을 사용할 수 있다.

function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length
}

