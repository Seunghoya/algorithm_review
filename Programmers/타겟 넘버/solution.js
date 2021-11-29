// dfs 풀이

function solution (numbers, target) {
    var answer = 0;

    dfs(0, 0)

    function dfs (depth, sum) {
        if (depth === numbers.length) {
            if (sum === target) {
                answer++
            }
            return;
        }
        dfs(depth + 1, sum + numbers[depth])
        dfs(depth + 1, sum - numbers[depth])
    }
    return answer;
}

// bfs 는 실행시간 초과로 통과되지 않는다.
