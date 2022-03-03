function solution(n) {
    var answer = 0;
    answer = String(n).split('')

    let sum = 0
    for (let i = 0; i < answer.length; i++) {
        sum += parseInt(answer[i])
    }
    return sum;
}

// 다른 사람 풀이
function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}