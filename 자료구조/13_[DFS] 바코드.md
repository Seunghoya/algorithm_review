# 바코드
### 문제
1, 2, 3으로만 이루어진 수열 바코드를 만들어야 합니다. 무조건 1, 2, 3만 붙여서 바코드를 만들었다면 쉬웠겠지만, 아쉽게도 바코드를 만드는 데에 조건이 걸려 있습니다. 바코드에서 인접한 두 개의 부분 수열이 동일하다면 제작할 수 없다고 할 때, 주어진 길이 len의 바코드 중 가장 작은 수를 반환하는 함수를 작성하세요.

|만들 수 없는 바코드|만들 수 있는 바코드|
|112|	1312|
|1231312|	3|
|232312|	231213|
- 부분수열? 주어진 수열에서 연속된 모든 구간을 말합니다. 수열 123의 부분수열은 1, 2, 3, 12, 23, 123 입니다.
- 인접한 두 부분수열? 첫번째 부분수열과 두번째 부분수열이 연속된 경우를 말합니다.
- 수열 1234에서 인접한 부분수열 (우리는 두 부분수열이 같은 지 관심이 있으므로 길이가 서로 다른 경우는 무시한다)

    - 1과 2, 2와 3, 3과 4, 12와 34입니다.
- 만들 수 없는 바코드를 보자면,

    - '11'2
    - 12'3131'2
    - '2323'12
    - 인접한 두 개의 부분 수열이 동일하기 때문에 만들 수 없습니다. 고로, '12131213'과 같이 네 자리씩 중복되어도 만들 수 없습니다. 자릿수와 상관없이, 인접한(붙어있는) 부분수열이 같다면 바코드를 만들 수 없습니다.

### 입력
인자 1: len
Number 타입의 1 이상 50 이하의 자연수

### 출력
String 타입을 리턴해야 합니다.
예시로, 121도, 123도 전부 바코드로 제작할 수 있지만 제일 작은 수는 121이기 때문에 121을 반환해야 합니다.

### 입출력 예시
```js
let output = barcode(3);
console.log(output); // "121"

output = barcode(7);
console.log(output); // "1213121"

output = barcode(20);
console.log(output); // "12131231321231213123"
```

### 내가 작성한 코드
```js

```
### 레퍼런스 코드
```js
function barcode(len) {
    const isValid = (str) => {
        const reversed = str.split('').reverse().join('');
        const halfLen = Math.floor(str.length / 2);
        for (let i = 1; i <= halfLen; i++) {
            if (reversed.slice(0, i) === reversed.slice(i, i + i)) {
                return false;
            }
        }
        return true;
    }
    const chr = '123';
    const aux = (str) => {
        if (str.length === len) return str;
        for (let i = 0; i < chr.length; i++) {
            if(isValid(str + chr[i])) {
                const founded = aux(str + chr[i]);
                if (founded !== null) return founded;
            }  
        }
        return null
    }
    return aux('');
}

```