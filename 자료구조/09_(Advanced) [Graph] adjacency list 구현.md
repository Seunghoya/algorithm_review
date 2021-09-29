# Implementation Graph
Graph 구현을 위한 기본적인 코드가 작성되어 있습니다. Graph 자료구조의 특성을 이해하고 FILL_ME_IN 을 채워 테스트를 통과해 주세요.

### 맴버 변수
버텍스와 간선을 담을 수 있는 Object 타입의 vertices
### 메서드
-addVertex(vertex): 그래프에 버텍스를 추가해야 합니다.
-contains(vertex): 그래프에 해당 버텍스가 존재하는지 여부를 Boolean으로 반환해야 합니다.
-addEdge(fromVertex, toVertex): fromVertex와 toVertex 사이의 간선을 추가합니다.
-hasEdge(fromvertex, toVertex): fromVertex와 toVertex 사이의 간선이 존재하는지 여부를 Boolean으로 반환해야 합니다,
-removeEdge(fromVertex, toVertex): fromVertex와 toVertex 사이의 간선을 삭제해야 합니다.
-removeVertex(vertex): 그래프에서 버텍스를 삭제합니다.

### 주의사항
- 인접 리스트 방식으로 구현해야 합니다.
- 구현해야 하는 그래프는 무방향 그래프입니다.

### 사용 예시
```js
const adjList = new GraphWithAdjacencyList();
adjList.addVertex("Seoul");
adjList.addVertex("Daejeon");
adjList.addVertex("Busan");

adjList.contains("Seoul"); // true
adjList.contains("Jeonju"); // false

adjList.addEdge("Daejeon", "Seoul");
adjList.hasEdge("Seoul", "Daejeon"); //true

adjList.removeVertex("Seoul");
adjList.hasEdge("Seoul", "Daejeon"); //false
...
```

### 내가 작성한 코드(아직 미작성)
```js
// undirected graph (무향 그래프)
// adjacency list (인접 리스트)
class GraphWithAdjacencyList {
	constructor() {
		this.vertices = {};
	}

	addVertex(vertex) {
		// TODO: 정점을 추가합니다.
		// 넘겨받은 인자(정점)은 키가 되며, 빈 배열을 값으로 할당합니다.
		// 이미 존재하는 정점이라면, 덮어 씌워지지 않아야 합니다.
		this.vertices["FILL_ME_IN"] = "FILL_ME_IN";
	}

	contains(vertex) {
		// 인자로 넘겨받은 정점의 존재여부를 반환합니다.
		return !!this.vertices[vertex];
	}

	addEdge(fromVertex, toVertex) {
		// TODO: 간선을 추가합니다.
		// - fromVertex의 인접 리스트에 toVertex를 추가하고
		// - toVertex의 인접 리스트에 fromVertex를 추가합니다.
		// 넘겨받은 2개의 정점 모두 존재하는 정점이어야 합니다.

		if (!this.contains("FILL_ME_IN") || !this.contains("FILL_ME_IN")) {
			return;
		}

		if (!this.hasEdge("FILL_ME_IN", "FILL_ME_IN")) {
		}

		if (!this.hasEdge("FILL_ME_IN", "FILL_ME_IN")) {
		}
	}

	hasEdge(fromVertex, toVertex) {
		// 만약 정점(fromVertex)이 존재하지 않는다면
		if (!this.contains(fromVertex)) {
			// false를 반환합니다
			return false;
		}
		// 존재한다면 해당 정점의 리스트에 toVertex가 포함되어있는지 반환합니다
		return !!this.vertices[fromVertex].includes(toVertex);
	}

	removeEdge(fromVertex, toVertex) {
		// TODO: 간선을 삭제합니다.
		// 인자로 넘겨받은 두 정점이 모두 존재한다면
		// - fromVertex의 인접 리스트에 있는 toVertex를 삭제하고
		// - toVertex의 인접 리스트에 있는 fromVertex를 삭제합니다.

		if (!this.contains("FILL_ME_IN") || !this.contains("FILL_ME_IN")) {
			return;
		}

		if (this.hasEdge("FILL_ME_IN", "FILL_ME_IN")) {
			const index = this.vertices["FILL_ME_IN"].indexOf("FILL_ME_IN");
			this.vertices["FILL_ME_IN"].splice(index, 1);
		}
		// TODO:  두번째 정점의 인접 리스트에 첫번째 정점이 있을 경우
	}

	removeVertex(vertex) {
		// TODO: 정점을 삭제합니다.
		// 인자로 넘겨받은 정점(A)이 존재한다면
		// - 이 정점(A)을 삭제함은 물론,
		// - 다른 모든 정점들의 리스트를 순회하며 넘겨받은 정점(A)과 이어져 있는 간선을 제거합니다
		if (this.contains(vertex)) {
		}
	}
}
```

### 레퍼런스 코드
```js
// undirected graph (무향 그래프)
// adjacency list (인접 리스트)
class GraphWithAdjacencyList {
	constructor() {
		this.vertices = {};
	}

	addVertex(vertex) {
		// 이미 존재하는 정점이라면 덮어씌워지지 않게 방지합니다.
		this.vertices[vertex] = this.vertices[vertex] || [];
	}

	contains(vertex) {
		// 인자로 넘겨받은 정점의 존재여부를 반환합니다.
		return !!this.vertices[vertex];
	}

	addEdge(fromVertex, toVertex) {
		// 넘겨받은 두 정점중 하나라도 존재하지 않는다면
		if (!this.contains(fromVertex) || !this.contains(toVertex)) {
			// 아무것도 하지않고 종료합니다
			return;
		}

		// 두 정점이 모두 존재한다면
		// 첫번째 정점의 인접 리스트에 두번째 정점을 추가하고 (간선이 존재하지 않을 경우)
		if (!this.hasEdge(fromVertex, toVertex)) {
			this.vertices[fromVertex].push(toVertex);
		}
		// 두번째 정점의 인접 리스트에 첫번째 정점을 추가합니다 (간선이 존재하지 않을 경우)
		if (!this.hasEdge(toVertex, fromVertex)) {
			this.vertices[toVertex].push(fromVertex);
		}
	}

	hasEdge(fromVertex, toVertex) {
		// 만약 정점(fromVertex)이 존재하지 않는다면
		if (!this.contains(fromVertex)) {
			// false를 반환합니다
			return false;
		}
		// 존재한다면 해당 정점의 리스트에 toVertex가 포함되어있는지 반환합니다
		return !!this.vertices[fromVertex].includes(toVertex);
	}

	removeEdge(fromVertex, toVertex) {
		// 넘겨받은 두 정점중 하나라도 존재하지 않는다면
		if (!this.contains(fromVertex) || !this.contains(toVertex)) {
			// 아무것도 하지않고 종료합니다
			return;
		}

		// 두 정점이 모두 존재한다면
		// 첫번째 정점의 인접 리스트에 두번째 정점이 있을 경우
		if (this.hasEdge(fromVertex, toVertex)) {
			// 두번째 정점의 인덱스를 찾은 뒤 삭제합니다
			const toVertexIndex = this.vertices[fromVertex].indexOf(toVertex);
			this.vertices[fromVertex].splice(toVertexIndex, 1);
		}
		// 두번째 정점의 인접 리스트에 첫번째 정점이 있을 경우
		if (this.hasEdge(toVertex, fromVertex)) {
			// 첫번째 정점의 인덱스를 찾은 뒤 삭제합니다
			const fromVertexIndex = this.vertices[toVertex].indexOf(fromVertex);
			this.vertices[toVertex].splice(fromVertexIndex, 1);
		}
	}

	removeVertex(vertex) {
		// 만약 인자로 넘겨받은 정점이 존재한다면
		if (this.contains(vertex)) {
			// 해당 정점과 연결된 간선을 지우고
			while (this.vertices[vertex].length > 0) {
				this.removeEdge(this.vertices[vertex][0], vertex);
			}
			// 최종적으로 해당 정점을 삭제합니다
			delete this.vertices[vertex];
		}
	}
}
```