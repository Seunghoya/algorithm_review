function solution(numbers) {
    var answer = 0;
    
    let numArr = numbers.split("").map((el) => {
        return parseInt(el)
    })
    
    let result = []
    for (let i = 1; i < numbers.length + 1; i++) {
        result.push(...getPermutations(numArr, i))
    }

    let a = result.map((el) => el.join("")).map((el) => parseInt(el))
    let newArr = []
    for (let i = 0; i < a.length; i++) {
        if (isPrime(a[i]) === true && newArr.includes(a[i]) === false) newArr.push(a[i])
    }
    console.log(newArr)

    function getPermutations(arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((v) => [v]);
        else {
        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
            const permutations = getPermutations(rest, selectNumber - 1);
            const attached = permutations.map((permutation) => [
            fixed,
            ...permutation,
            ]);
            results.push(...attached);
        });
        }
        return results;
    }
    
    function isPrime(num) {
        for(let i = 2; num > i; i++) {
            if(num % i === 0) {
                return false;
            }
        }
    return num > 1;
    }

    return newArr.length;
}

// 순열과 소수검증 함수를 이용하는거까진 알겠는데.. 순열을 for문으로 i만큼 돌릴 생각을 못한게 시간을 한참 잡아먹었다.
// 사실 별거 아닌데...

// 일단 시간 복잡도를 개선할 여지가 많이 있다. 예를들면 getPermutations 함수를 사용해 모든 순열을 찾는 로직을 개선해야 할 것이고..
// 소수 찾는 isPrime 함수 역시... 제곱근을 이요해 검증하는 방식이 있는데.. 이건.. 수학적인 개념이라 사실 정확하게 이해를 못해서 안썼다.

// 다른사람 풀이 중 인상적인 코드
function solution(input) {
    let list = input.split('').sort();
    let a = addNum('', list);
    let obj = {};
    a.map(n => {
        obj[Number(n)] = true;
    });
    return Object.keys(obj).length;
}

function addNum(num, left) {
    let list = [];
    for(let i = 0; i < left.length; i ++) {
        let cl = left.slice(0);
        let cn = cl[i]; 
        let c = num.toString() + cn.toString();
        if (isPrime(c)) list.push(c);
        cl.splice(i, 1);
        if(cl.length) {
            list = list.concat(addNum(c, cl));
        }
    }

    return list;
}

function isPrime(num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

// 일단 addNum 함수 로직이 인상적인게, 나는 모든 순열을 구해주는 getPermutations 함수를 사용했는데,
// 여기서 사용한 addNum 함수는 함수 내부에서 isPrime 함수로 소수 검증절차까지 포함해 list를 반환하기 때문에
// 내가 작성한 코드보다 소수검증 절차를 하나 생략할 수 있다. 