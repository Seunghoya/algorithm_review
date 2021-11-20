function solution(participant, completion) {
    var answer = '';
    
    participant.sort()
    completion.sort()
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i]
            break;
        }
    }
    return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])) // "leo"
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])) // "mislav"
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]
)) // "vinko"



// 충젹적인 코드..
const solution=(p,c)=>p.find(name=>!c[name]--,c.map(name=>c[name]=(c[name]|0)+1))
