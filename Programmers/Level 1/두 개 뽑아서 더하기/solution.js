function solution(numbers) {
  var answer = [];
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
          sum = numbers[i] + numbers[j]
          answer.push(sum)
      }
  }
  answer.sort((a, b) => a - b)
  let result = new Set(answer)
  return [...result];
}

