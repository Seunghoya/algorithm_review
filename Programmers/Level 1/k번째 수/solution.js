function solution(array, commands) {
    var answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        let newArr = array.slice(commands[i][0] - 1, commands[i][1]).sort((a,b) => a - b)
        answer.push(newArr[commands[i][2] - 1])
    }
    return answer;
}

// 고차함수 잘 쓴 코드는 진짜 아름답다... 

function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}

// 이게 찐 고인물...

var solution = (_, $) => $.map(([i,j,k]) => _.slice(i-1, j).sort((_,$) => _-$)[k-1])


// 고인물 2..

function solution(array, commands) {
    return commands.map(val => array.slice(val[0]-1, val[1]).sort((a,b)=>a-b)[val[2]-1]);
}

// 아직 멀었다.. 공부하자