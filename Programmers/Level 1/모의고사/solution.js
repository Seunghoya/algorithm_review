function solution(answers) {
    var answer = [];
    let A = [1,2,3,4,5]
    let B = [2,1,2,3,2,4,2,5]
    let C = [3,3,1,1,2,2,4,4,5,5]
    
    let ABC = [0,0,0]
    for (let i = 0; i < answers.length; i++) {
        if (A[i % 5] === answers[i]) ABC[0]++
        if (B[i % 8] === answers[i]) ABC[1]++
        if (C[i % 10] === answers[i]) ABC[2]++
    }
    
    for (let i = 0; i < ABC.length; i++) {
        if (ABC[i] === Math.max(...ABC)) answer.push(i + 1)
    }
    return answer;
}

// 이번 문제는 상대적으로 쉽게 풀었는데.. 모든 레벨1 문제가 다 이러면 하루에 10개씩 후다닥 풀겠는데...ㅠ

// 조금 인상적인 답안

function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};

    return answer;
}

// filter메소드를 이용한 풀이법인데... 눈에 익혀두면 좋을것 같아서 가져왔다.