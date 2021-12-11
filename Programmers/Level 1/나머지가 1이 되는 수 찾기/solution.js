function solution(n) {
    var answer = [];
    
    for (let i = 0; i < n; i++) {
        if (n % i === 1) answer.push(i)
    }
    
    return Math.min(...answer);
}

// 크게 상관은 없는데 다른 사람 풀이 보고나니까 앗차싶었음..

const solution = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 1) {
            return i;
        }
    }
};

// 최소값을 찾는데 굳이 두 번째 수로 넘어갈 필요가 없이 제일 처음 나머지1이 되는 수를 리턴하면 됨..