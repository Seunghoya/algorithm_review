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

// 