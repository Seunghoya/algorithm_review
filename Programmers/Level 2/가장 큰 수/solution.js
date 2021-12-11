function solution(numbers) {
    var answer = '';
    
    let newNum = getPermutation(numbers, numbers.length).map((el) => el.join(''))    
    return `${Math.max(...newNum)}`;
}
const getPermutation = (arr, num) => {
    let result = [];
    if (num === 1) {
        return arr.map((el) => [el]);
    }
    arr.forEach((fixed, idx, origin) => {
        let rest = origin.filter((_, index) => index !== idx);
        let combinations = getPermutation(rest, num - 1);
        let attached = combinations.map((el) => [fixed, ...el]);
        result.push(...attached);
    });
    return result;
};
// 내가 작성한 코드에선 테스트케이스는 통과하지만, 제출했을 땐 런타임 오류가 뜬다.

// ???? 이게 이렇게 되네
function solution(numbers) {
    
    var answer = numbers.map(c=> c + '').
    				sort((a,b) => (b+a) - (a+b)).join('');
    
    return answer[0]==='0' ? '0' : answer;
}