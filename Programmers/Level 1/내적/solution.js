let solution = (a,b) => {
    
    let answer = 0;
    for(let i=0; i<a.length; i++){
        answer += a[i]*b[i];
    }
    return answer;
}

// 이것도 역시 1레벨 중 가장 쉬운 수준..

// 다른사람 풀이
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}

// 역시 고인물들은 달라..