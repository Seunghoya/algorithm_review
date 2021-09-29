# 연결된 정점들
### 문제
방향이 없는 간선들의 목록이 주어질 때, 연결된 정점의 컴포넌트(그룹들)가 몇 개인지 반환하는 함수를 작성하세요.

### 입력
인자 1: edges
2차원 Array 타입을 요소로 갖는 시작과 도착 정점이 담겨있는 배열들을 담고 있는 목록 (2차원 배열)
ex) [[0, 1], [1, 2], [3, 4]]
### 출력
Number 타입을 리턴해야 합니다.
연결된 정점의 컴포넌트의 수를 숫자로 반환합니다.
### 주의사항
주어진 간선은 무향입니다
[1, 2] 는 정점 1에서 정점 2로도 갈 수 있으며, 정점 2에서 정점 1로도 갈 수 있습니다.
### 입출력 예시
```js
const result = connectedVertices([
	[0, 1],
	[2, 3],
	[4, 5],
]);
console.log(result); // 3
```
해당 정점들은 아래와 같은 모양을 하고 있습니다.
![image1](https://s3.ap-northeast-2.amazonaws.com/urclass-images/MoKaA-692-1614328240153.png)
```js
const result = connectedVertices([
	[0, 1],
	[2, 3],
	[3, 4],
	[3, 5],
]);
console.log(result); // 2
```
해당 정점들은 아래와 같은 모양을 하고 있습니다.
![image2](https://s3.ap-northeast-2.amazonaws.com/urclass-images/NMNV6OsUN-1614328260295.png)

### 내가 작성한 코드
```js
function connectedVertices(edges) {
  let max = 0;
  for (let el of edges){
    max = Math.max(Math.max(el[0], el[1]), max)
  }
  let matrix = new Array(max + 1)
  for (let i = 0; i <= max; i++){
    matrix[i] = new Array(max + 1).fill(0)
  }
  for (let el of edges) {
    matrix[el[0]][el[1]] = 1
    matrix[el[1]][el[0]] = 1
  }
  console.log(matrix)

  function dfs(matrix, idx) {
    visited[idx] = true
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[idx][j] === 1 && !visited[j]) {
        dfs(matrix, j)
      }
    }
  }
  let count = 0
  let visited = new Array(matrix.length).fill(false)
  console.log(visited)
  
  for (let k = 0; k < matrix.length; k++) {
    if(!visited[k]) {
      dfs(matrix, k)
      count++
    }
  }
  return count
}
```

### 레퍼런스 코드
```js
function connectedVertices(edges) {

	// 최대 버텍스를 찾습니다.
	const maxVertex = edges.reduce((a, c) => {
		const bigger = Math.max(...c);
		if (bigger > a) return bigger;
		return a;
	}, 0);

	// 이 레퍼런스는 인접 리스트로 만듭니다. (행렬도 가능합니다. 행렬로 작성해 보세요.)
	const adjList = {};

  // 인접 리스트에 최대 버텍스 크기만큼 반복해 버텍스를 만들어 줍니다.
	for (let i = 0; i <= maxVertex; i++) {
		adjList[i] = [];
	}

  // edges를 순회하며, (무향 그래프이므로 쌍방으로) 간선을 연결해 줍니다.
	// 이렇게 adjList 그래프가 완성되었습니다.
	for (let i = 0; i < edges.length; i++) {
		adjList[edges[i][0]].push(edges[i][1]);
		adjList[edges[i][1]].push(edges[i][0]);
	}

  // 방문한 버텍스를 담을 객체를 선언합니다.
	const visited = {};
	// 컴포넌트가 몇 개인지 카운트할 변수를 선언합니다.
	let count = 0;

  // 그래프에 있는 버텍스를 전부 순회합니다.
	for (let vertex = 0; vertex <= maxVertex; vertex++) {

		// 만약 i 번째 버텍스를 방문하지 않았다면 bfs로 해당 버텍스와, 버텍스와 연결된(간선) 모든 버텍스를 방문합니다.
		// BFS로 갈 수 있는 모든 정점들을 방문하며 visited에 담기 때문에, 방문한 버텍스는 visited에 들어 있어서 bfs를 돌지 않습니다.
		// 이렇게 컴포넌트를 확인합니다.
		if (!visited[vertex]) {
			// 그래프와 버텍스, 방문했는지 확인할 visited를 변수에 담습니다.
			bfs(adjList, vertex, visited);

			// 카운트를 셉니다.
			count++;
		}
	}

  // 카운트를 반환합니다.
	return count;
}


// bfs solution
function bfs(adjList, vertex, visited) {

	// bfs는 가장 가까운 정점부터 탐색하기 때문에 queue를 사용합니다.
	// queue에 vertex를 담습니다.
	const queue = [vertex];
	// 해당 버텍스를 방문했기 때문에 visited에 담아 주고, 방문했다는 표시인 true를 할당합니다.
	visited[vertex] = true;

  // queue의 길이가 0일 때까지 순환합니다.
	while (queue.length > 0) {

		// cur 변수에 정점을 할당합니다.
		// queue는 선입선출이기 때문에 shift 메소드를 사용하여 버텍스를 가져옵니다.
		const cur = queue.shift();

		// 그래프의 cur 정점에 있는 간선들을 전부 순회합니다.
		for (let i = 0; i < adjList[cur].length; i++) {

			// 만약, 해당 버텍스를 방문하지 않았다면 queue에 삽입합니다.
			// 방문했다는 표시로 visited에 해당 버텍스를 삽입하고 true를 할당합니다.
			if (!visited[adjList[cur][i]]) {
				queue.push(adjList[cur][i]);
				visited[adjList[cur][i]] = true;
			}

			// queue에 다음으로 방문할 버텍스가 있기 때문에 while은 멈추지 않습니다.
			// 만약, queue가 비어 있다면 더 이상 갈 곳이 없는 것이기 때문에 bfs 함수를 종료하고 카운트를 셉니다.
		}
	}
}

// dfs solution
// bfs 함수 대신 dfs를 사용해도 결과는 같습니다.
function dfs(adjList, vertex, visited) {
	// 해당 버텍스에 방문했다는 표시로 visited key에 vertex를 담고 값에 true를 할당합니다.
	visited[vertex] = true;

	// 해당 버텍스의 모든 간선들을 전부 순회합니다.
	for (let i = 0; i < adjList[vertex].length; i++) {

		// 만약 i번째 간선과 이어진 버텍스를 방문하지 않았다면
		if (!visited[adjList[vertex][i]]) {
			// dfs를 호출해(재귀) 방문합니다.
			dfs(adjList, adjList[vertex][i], visited);
		}
		// 모든 방문이 종료되면 다음 버텍스를 확인합니다.
		// 재귀가 종료되면(한 정점에서 이어진 모든 간선들을 확인했다면) dfs 함수를 종료하고 카운트를 셉니다. 
	}
}


// matrix
// function connectedVertices(edges) {
//   // 행렬을 기준으로 하겠습니다.

//   // 제일 큰 버텍스 찾기.
//   const max = Math.max(...edges.flat());

//   // 버텍스 찾았다면? 행렬 만들기
//   const matrix = new Array(max + 1).fill(0).map(e => new Array(max + 1).fill(0));

//   //엣지 넣기 ㅎㅎ
//   edges.forEach(e => {
//     matrix[e[0]][e[1]] = 1;
//     matrix[e[1]][e[0]] = 1;
//   })

//   // 탐색에 가장 중요한 건? 두 번 방문하지 않는다.
//   let visited = new Array(matrix.length).fill(false);

//   // 카운트
//   let count = 0;

//   // 버텍스를 하나씩 순회하면서 연결된 정점이 있는지 확인한다!!
//   for(let i = 0; i < matrix.length; i++) {
//     if(visited[i] === false) {
//       bfs(matrix, i, visited);
//       count++;
//     }
//   }

//   // 카운트를 반환합니다.
// 	return count;
// }


// // bfs solution
// function bfs(matrix, v, visited) {
//   // 큐에 시작점 넣고
//   let Q = [v];
//   // 방문했다고 표시
//   visited[v] = true;
//   // 큐에 모든 게 없어질 ㄸㅐ까지 반복합니다.

//   while(Q.length !== 0) {
//     // 큐에서 하나 뺍니다.
//     let current = Q.pop();
//     // 현재 정점 확인합니다.
//     for(let i = 0; i < matrix[current].length; i++) {
//       // 정점 순회하면서?
//       if(visited[i] !== true && matrix[current][i] === 1) {
//         // 큐에 i를 넣자
//         Q.unshift(i);
//         // 방문했다고 표현하자
//         visited[i] = true;
//       }
//     }
//   }
// }

// // dfs solution
// // bfs 함수 대신 dfs를 사용해도 결과는 같습니다.
// function dfs(matrix, vertex, visited) {
// 	// 해당 버텍스에 방문 표시
// 	visited[vertex] = true;

// 	// 해당 버텍스의 모든 간선들을 전부 순회합니다.
// 	for (let i = 0; i < matrix[vertex].length; i++) {

// 		// 만약 i번째 간선과 이어진 버텍스를 방문하지 않았다면
// 		if(visited[i] !== true && matrix[vertex][i] === 1){
// 			// dfs를 호출해(재귀) 방문합니다.
// 			dfs(matrix, i, visited);
// 		}
// 		// 모든 방문이 종료되면 다음 버텍스를 확인합니다.
// 		// 재귀가 종료되면(한 정점에서 이어진 모든 간선들을 확인했다면) dfs 함수를 종료하고 카운트를 셉니다. 
// 	}
// }
```