function solution(left, right) {
    var answer = 0;
    let cnt = 0;
    for (let i = left; i <= right; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) cnt++
        }
        if (cnt % 2 === 0) answer += i
        else answer -= i
        cnt = 0
    }
    
    return answer;
}

// 약수를 구할 때 for문으로 일일히 다 나눠서 계산했는데 다른사람 풀이 보니까 제곱근으로 약수 구하는 방법이 있었음..
// 확실히 수학적 지식이 필요한 문제에 약한게 티가 나는듯...

// 다른사람 풀이
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}