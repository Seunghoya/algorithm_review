function solution(s) {
    if (s.length === 1) return 1;
    let strings = [];
    
    // 제일 긴 압축은 전체 문자열의 절반이 2번 반복되는 경우이므로 반복 횟수를 s.length / 2 로 해준다. 
    for(let i = 1; i <= parseInt(s.length / 2); i++) {
        // 두 번째 반복문이 돌아갈 때 초기화 되지않게 첫 번째 반복문에서 cnt,string을 선언
        let cnt = 1;
        let string = '';
        for(let j = 0; j < s.length; j += i) {
            // 두 번째 반복문이 돌 때 마다 인덱스 j~i의 문자열이 중복되는지 체크
            const current = s.substr(j, i);
            const next = s.substr(j+i, i);
            // 체크될 때
            if(current === next) {
                cnt++;
            //체크되지 않을 때 
            } else {
                // cnt가 1이 아닐 때(체크된 적이 없을 때) 문자열 그대로 반환하고, cnt가 2이상일 때(카운트 된 적 있을 때) 카운트에 string을 새 string에 넣어준다.
                string = cnt > 1? string + cnt + current : string + current;
                cnt = 1;
            }
        }
        strings.push(string.length);
    }
    return Math.min(...strings);
}

// 다른 사람 풀이 중 인상적인 코드...

function getRegExp(len, i) {
    // 이 함수를 해석해보면... 
    const reStr = `^${`(${'.'.repeat(i)})`.repeat(Math.floor(len / i))}(${'.'.repeat(len % i)})$`
    return new RegExp(reStr)
}

function solution(s) {
    if (s.length === 1) {
        return 1
    }
    const result = Array.from({length: Math.floor(s.length / 2)}).map((_, i) => {
        const [, ...matched] = s.match(getRegExp(s.length, i + 1))
        return matched.slice(1)
            .reduce((result, part) => {
                const last = result[result.length - 1]
                if (last.seq === part) {
                    last.count += 1
                } else {
                    result.push({seq: part, count: 1})
                }
                return result
            }, [{seq: matched[0], count: 1}])
            .map(({seq, count}) => 
                count > 1 ? count + seq : seq
            ).join('')
    })
    return Math.min(...result.map(compressed => compressed.length))
}

// 정규표현식으로도 할 수 있는게 놀랍다. getRegExp함수가 어떤식으로 동작하는지 알고싶은데... 좀 더 공부해보고 블로깅 해보자.