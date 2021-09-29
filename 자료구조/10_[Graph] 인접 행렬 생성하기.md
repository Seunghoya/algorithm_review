# 인접 행렬 생성하기
### 문제
방향이 있는 간선과 방향이 없는 간선들의 목록들을 받아 2차원 배열의 인접행렬을 반환하는 함수를 작성하세요.

### 조건
각 간선은 3가지 정보를 담고 있습니다.
- 0번째: 간선의 시작 정점 (0 이상의 정수)
- 1번째: 간선의 도착 정점 (0 이상의 정수)
- 2번째: 방향성 ('undirected' 일시 무향, 'directed' 일시 방향)

### 입력
인자 1: edges
- Number 타입의 방향/무향인 간선들의 목록이 담긴 배열

### 출력
- Array 타입을 리턴해야 합니다.
- 2차원 배열의 인접 행렬

### 주의사항
- 정점 0에서 정점4로 이어주는 간선이 존재할 경우 정점 1, 2, 3도 존재합니다.
- 반환하는 인접행렬은 2차원 배열이며, 행(row)는 바깥 배열, 열(column)은 안쪽 배열입니다.
    - let matrix = [[0, 0], [0, 0]]
    - matrix[0] === 0번째 행
    - matrix[0][0] === 0번째 행의 0번째 열
- 두 정점간의 간선의 유무는 0과 1로 표시합니다.
    - 0: 두 정점간에 간선이 존재하지 않을 경우
    - 1: 두 정점간에 간선이 존재할 경우
- 아래의 2차원 배열에서 세로축은 시작 정점, 가로축은 도착 정점입니다.
```js
const matrix = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];
```
### 입출력 예시
```js
let output1 = createMatrix([
	[0, 3, "directed"],
	[0, 2, "directed"],
	[1, 3, "directed"],
	[2, 1, "directed"],
]);

console.log(output1);
/**
 * [
 *  [0, 0, 1, 1],
 *  [0, 0, 0, 1],
 *  [0, 1, 0, 0],
 *  [0, 0, 0, 0]
 * ]
 */

let output2 = createMatrix([
	[0, 2, "directed"],
	[2, 4, "undirected"],
	[1, 3, "undirected"],
	[2, 1, "directed"],
]);

console.log(output2);
/**
 * [
 *  [0, 0, 1, 0, 0],
 *  [0, 0, 0, 1, 0],
 *  [0, 1, 0, 0, 1],
 *  [0, 1, 0, 0, 0],
 *  [0, 0, 1, 0, 0],
 * ]
 */
 ```

### 내가 작성한 코드
```js
function createMatrix(edges) {
  let arr = []
  let flatArr = edges.flat();
  let maxNum = 0;

  for (let i = 0; i < flatArr.length; i++) {
    if (typeof flatArr[i] === 'number'){
      arr.push(flatArr[i])
    }
  }
    maxNum = Math.max(...arr)

  let matrix = Array(maxNum +1).fill(0).map((el) => new Array(maxNum +1).fill(0))
  
  for (let i = 0; i < edges.length; i++) {
      x = edges[i][0]
      y = edges[i][1]
    if (edges[i][2] === 'directed') {
      matrix[x][y] = 1
      }
    else if (edges[i][2] === 'undirected') {
      matrix[x][y] = 1
      matrix[y][x] = 1
      }
  }
  return matrix // 아... 또 결국엔 리턴문 위치 잘못 잡아서 실수한거였어 ㅠㅠ
}

```

### 레퍼런스 코드
```js
function createMatrix(edges) {

	// 행렬의 크기를 구합니다.
	// max 변수를 0으로 할당하고, edges를 전부 순회해 제일 큰 숫자를 max에 할당합니다.
	// max보다 크지 않을 경우엔 바꾸지 않습니다.
	let max = 0;
	for (let i = 0; i < edges.length; i++) {
		// edges의 한 요소에는 숫자 이외에 방향성도 있으니, 숫자까지만 slice를 하여 비교합니다.
		const curMax = Math.max(...edges[i].slice(0, 2));
		curMax > max ? (max = curMax) : null;
	}

  // matrix의 뼈대를 잡습니다.
  // max로 구한 최대값에 1을 더하여 array를 만들고(0번째부터 있기 때문입니다) 전부 0으로 채운 뒤
	// map을 사용해 각 요소마다 배열로 바꿔줍니다. 배열의 크기를 이번에도 최대값에 1을 더한 뒤, 0으로 채웁니다.
	const result = new Array(max + 1).fill(0).map((row) => new Array(max + 1).fill(0));
	
	// !!! new Array(max + 1).fill(new Array(max + 1))처럼 하게 되면, 주소를 참조하게 됩니다. 꼭 0을 채운 뒤, Map으로 바꾸는 등
	// 주소를 참조하지 않는 방법을 사용해야 합니다 !!!

  // edges를 순회하며 무향인 곳엔 각각의 간선에 1로 바꾸어 주고, 방향이 있는 간선엔 해당 간선에만 1로 바꾸어 줍니다.
	// 만약, [0, 3, "directed"]가 들어왔다면,
	// 만들어 둔 result의 0 번째 row에 3 번째 col에 1을 추가합니다.
	// [ 0, 0, 0, 1 ] => 0번째 버텍스가 갈 수 있는 간선 중, 3 번으로 가는 간선만 갈 수 있습니다.
	edges.forEach((edge) => {
		const [row, col, direction] = edge;
		if (direction === "undirected") {
			result[col][row] = 1;
		}
		result[row][col] = 1;
	});

  // result를 반환합니다.
	return result;
}
```