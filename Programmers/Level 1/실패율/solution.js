function solution(N, stages) {
    var answer = [];
    const total = [];
    
    for (let i=1; i<=N; i+=1) {
        let count=0;
        let players=0;
        for (let j=0; j<stages.length; j+=1) {
            if(stages[j] >= i) {
                players += 1;
            }
            if(stages[j] === i) {
                count += 1;
            }
        }
        answer.push({
            stage: i, 
            failRatio: count/players
        });
    }
    
    answer.sort((a,b) => {
        if (a.failRatio === b.failRatio) {
            return a.stage - b.stage;
        } 
        else {
            return b.failRatio - a.failRatio;
        }
    })
    return answer.map(item => item.stage)
}


// 다른사람 풀이
function solution(N, stages) {
    let tempArr = stages;
    let answerObj = {};
    for ( let i = 1; i <= N; i++ ) {
        let top = tempArr.filter(el => el === i).length;
        let bottom = tempArr.length;
        answerObj[i] = top/bottom;
        tempArr = tempArr.filter(el => el !== i);    
    }
    return Object.entries(answerObj).sort((a,b) => b[1] - a[1]).map(v => +v[0])
}

// 지난번에 이어 filter 메서드를 사용한 풀이법이 눈에 띄는데... 다른 문제 풀 때 고민해봐야겠다.
// 확실히 많이 아는만큼 풀이도 훨씬 쉬워지는걸 깨닫는중...