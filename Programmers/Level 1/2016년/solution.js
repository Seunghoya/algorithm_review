function solution(a, b) {
    var answer = '';
    // 필요한 정보가 각 월 별로 일수가 있어야 하고, 변수 하나에 담아서 더해주면서 카운트 해준 값을
    // 7로 나눴을 때 나머지 값으로 요일 정보를 찾는 방식으로 구현

    let days = [31,29,31,30,31,30,31,31,30,31,30,31]
    let week = ['FRI','SAT','SUN','MON','TUE','WED','THU']

    let cnt = 0;
    for (let i = 1; i < a; i++) {
        cnt += days[i - 1]
    }
    
    cnt += b - 1
    answer = week[cnt % 7]

    return answer;
}

// 다른 풀이

function getDayName(a,b){
    var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}

