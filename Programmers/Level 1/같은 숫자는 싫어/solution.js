function solution(arr) {
    var answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            answer.push(arr[i])
        }
    }
    
    return answer;
}

// 다른사람 풀이
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}

// 고인물 풀이
let solution=_=>_.filter((i,$)=>i!=_[--$])