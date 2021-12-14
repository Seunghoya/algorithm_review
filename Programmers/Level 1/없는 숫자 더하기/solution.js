function solution(numbers) {
    var answer = 0;

    for(let i = 0; i <= 9; i++){
        if (!numbers.includes(i)) answer += i;
    }

    return answer;
}
// 레벨 1 중에서도 꽤 쉬운편인듯..


// 다른 사람이 작성한 코드
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

// 이래서 수학을 해야해...