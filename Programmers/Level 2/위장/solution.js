function solution(clothes) {
    var answer = 1;

    let obj = {};
    for (let i of clothes) {
        if (obj[i[1]]) obj[i[1]]++;
        else obj[i[1]] = 1;
    }

    for (let i of Object.keys(obj)) {
        answer *= obj[i] + 1;
    }
    return answer - 1;
}

// (a + 1) * (b + 1) * (c + 1) ... 형태를 만들어 주면 됨
// 마지막에 - 1 해주는건 옷을 안입었을 경우
// 문제 보고 쉽게 풀 줄 알았는데 객체로 접근하는걸 생각하기까지 하루가 넘게 걸렸다.
// 근데 reduce로 푼 사람은 뭐야

// 베스트 답
function solution(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}

// 나도 고인물이고 싶다...