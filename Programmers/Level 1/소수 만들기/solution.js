function solution(nums) {
    let answer = 0;
    const len = nums.length;
    
    for(let i = 0; i < len; i++) {
        for(let j = i+1; j < len; j++) {
            for(let k = j+1; k < len; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) answer++;
            }
        }
    }
    return answer;


    function isPrime(num) {
        let result = true
        if (num === 1){
            return false
        }
        if (num === 2){
            return true
        }
        if (num % 2 === 0){
            return false
        }
        for (let i = 3; i < num; i++){
            if (num % i === 0)
            result = false
        }
        return result
    }
}
// 다른사람 풀이보면 거의 대부분 isPrime 함수를 만들고 3중 반복문으로 숫자 3개를 더한 값을 isPrime함수로 체크해주는 식이었다.
// 다만 소수찾는 방식에서 차이가 좀 있긴 하더라

// 다른사람이 작성한 코드
function primecheck(n){
    for(var i=2;i<=Math.sqrt(n);i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;    
}
function solution(nums){
    var cnt = 0;
    for(var i=0;i<nums.length-2;i++){
        for(var j=i+1;j<nums.length-1;j++){
            for(var w=j+1;w<nums.length;w++){
                    //console.log(nums[i]+"/"+nums[j]+"/"+nums[w]);

                    if(primecheck(nums[i]+nums[j]+nums[w])){
                        //console.log(nums[i]+nums[j]+nums[w]);
                        cnt++;
                    }
            }
        }
    }
    return cnt;
}

// 소수찾는 함수 중 제곱근을 이용해 찾는 방식에 대해 공부해보자.