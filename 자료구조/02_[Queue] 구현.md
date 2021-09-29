# Implementation Queue
Queue 구현을 위한 기본적인 코드가 작성되어 있습니다. Queue 자료구조의 특성을 이해하고 FILL_ME_IN 을 채워 테스트를 통과해주세요.

### 맴버 변수
데이터를 저장할 Object 타입의 storage
큐의 가장 앞을 가리키는 Number 타입의 포인터 front
큐의 가장 뒤를 가리키는 Number 타입의 포인터 rear

### 메서드
size(): 큐에 추가된 데이터의 크기를 리턴해야 합니다.
enqueue(): 큐에 데이터를 추가할 수 있어야 합니다.
dequeue(): 가장 먼저 추가된 데이터를 큐에서 삭제하고 삭제한 데이터를 리턴해야 합니다.

### 주의사항
내장 객체 Array.prototype에 정의된 메서드는 사용하면 안됩니다.
포인터 변수 front, rear의 초기값은 -1, 0, 1등 임의로 지정할 수 있지만 여기서는 0으로 합니다.

### 사용 예시
```js
const queue = new Queue();

queue.size(); // 0
for(let i = 1; i < 10; i++) {
  	queue.enqueue(i);
}
queue.dequeue(); // 1
queue.dequeue(); // 2
queue.size(); // 7
queue.enqueue(10);
queue.size(); // 8
queue.dequeue(); // 3
queue.dequeue(); // 4
queue.size(); // 6
...
```

### 내가 작성한 코드
```js
class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return Object.keys(this.storage).length
  }
	
	// 큐에 데이터를 추가 할 수 있어야 합니다.
  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear += 1;
  }
	
	// 가장 먼저 추가된 데이터가 가장 먼저 추출되어야 합니다.
  dequeue() {
    // 빈 큐에 dequeue 연산을 적용해도 에러가 발생하지 않아야 합니다
    if (this.size() <= 0) {
      return;
    }

    const result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;

    return result;
  }
}
```

### 레퍼런스 코드
```js
class Queue {
  //가장 앞에 있는 요소를 front,
  //가장 뒤에 있는 요소를 rear 라고 했을 때
  //queue constructor 생성
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }
  // queue의 사이즈를 구합니다.
  // queue는 추가될 때, rear의 값이 커지고 삭제 될 때, front가 변경이 때문에, 각 값을 알아야 size를 구할 수 있습니다.
  size() {
    return this.rear - this.front;
  }
  // queue에 element를 추가합니다.
  // 새롭게 추가될 요소의 인덱스를 나타내는 this.rear를 키로, 요소를 값으로 하여 storage에 할당합니다. this.rear은 다음 인덱스를 가리키게 하여 새로운 요소에 대비합니다.
  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear += 1;
  }
  // queue에서 element를 제거 한 뒤 해당 element를 반환합니다.
  // 만약 size가 0이라면 아무 일도 일어나지 않습니다.
  // this.front+1로 가장 앞에 있는 요소를 다시 설정한 후 변수에 저장하고, 큐에서 삭제합니다.
  dequeue() {
    if (this.size() === 0) {
      return;
    }
    const result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;
    return result;
  }
}
```