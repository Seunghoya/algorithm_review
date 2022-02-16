function solution(arr) {
  var answer = 0;
  let sum = arr.reduce((arr,cur) => arr + cur)
  return sum / arr.length;
}

