function solution(str1, str2) {
  var answer = 0;
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  
  // 주어진 문자열을 쪼개서 담을 배열 선언
  let arr1 = [], arr2 = []

  // 주어진 문자열을 두 글자씩 나눠서 배열에 담는다.
  for (let i = 0; i < str1.length; i++) {
      if (alphabet.includes(str1[i]) && alphabet.includes(str1[i + 1])) {
          arr1.push(str1[i] + str1[i + 1])            
      }

  }
  for (let i = 0; i < str2.length; i++) {
      if (alphabet.includes(str2[i]) && alphabet.includes(str2[i + 1]))
      arr2.push(str2[i] + str2[i + 1])
  }
  console.log(arr1, arr2)

  // 합집합과 교집합을 각각 구해준다.
  // 교집합을 담을 배열 준비
  let newArr = []

  arr1.forEach((el) => {
    // arr1에서 arr2에도 있는 건 교집합 새 배열에 담고, arr2에선 제거한다.
      let index = arr2.indexOf(el);
      if (index >= 0) {
          newArr.push(el)
          arr2.splice(index, 1)
      }
  })

  // 출력 형식에 맞게 answer를 수정해준다.
  if (arr1.length === 0 && arr2.length === 0) return 65536
  answer = Math.floor((newArr.length / (arr1.length + arr2.length)) * 65536)
  return answer;
}

// 다른 사람 풀이
function solution (str1, str2) {

  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  })
  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}

// set도 생각해봤지만 한 문자열 내에서 중복된 값이 있을 경우를 생각해 사용하지 않았는데, 스프레드로 풀어서 사용하면 되는걸 새로 알았음.
// 여러모로 정규표현식을 공부하긴 해야겠다..