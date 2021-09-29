# Implementation Stack
Stack 구현을 위한 기본적인 코드가 작성되어 있습니다. Stack 자료구조의 특성을 이해하고 FILL_ME_IN 을 채워 테스트를 통과해주세요.

### 맴버 변수
데이터를 저장할 Object 타입의 storage
스택의 가장 상단을 가리키는 Number 타입의 포인터 top

### 메서드
size(): 스택에 추가된 데이터의 크기를 리턴해야 합니다.
push(): 스택에 데이터를 추가할 수 있어야 합니다.
pop(): 가장 나중에 추가된 데이터를 스택에서 삭제하고 삭제한 데이터를 리턴해야 합니다.

### 주의사항
내장 객체 Array.prototype에 정의된 메서드는 사용하면 안됩니다.
포인터 변수 top의 초기값은 -1, 0, 1등 임의로 지정할 수 있지만 여기서는 0으로 하여 데이터가 추가될 위치를 가리키도록 합니다.

### 사용 예시
```js
const stack = new Stack();

stack.size(); // 0
for(let i = 1; i < 10; i++) {
  	stack.push(i);
}
stack.pop(); // 9
stack.pop(); // 8
stack.size(); // 7
stack.push(8);
stack.size(); // 8
...
```

### 내가 작성한 코드
```js
class Stack {
  constructor() {
    this.storage = {};
    this.top = 0; // 스택의 가장 상단을 가리키는 포인터 변수를 초기화 합니다.
  }

  size() {
    return Object.keys(this.storage).length;
  }

	// 스택에 데이터를 추가 할 수 있어야 합니다.
  push(element) {
    this.storage[Object.keys(this.storage).length] = element;
    this.top += 1;
  }
	
	// 가장 나중에 추가된 데이터가 가장 먼저 추출되어야 합니다.
  pop() {
    // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않아야 합니다
    if (this.top === 0) {
      return;
    }

    const result = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top -= 1;
    
    return result;
  }
}
```

### 레퍼런스 코드
```js
class Stack {
  //stack constructor를 생성합니다.
  constructor() {
    this.storage = {};
    this.top = 0;
  }
  // stack의 사이즈를 구합니다.
  // this.top은 스택이 쌓일 때마다 하나씩 증가하기 때문에 top으로 size를 구할 수 있습니다.
  // this.top은 스택에 새롭게 추가될 요소의 인덱스를 나타냅니다. 0부터 1씩 증감하며 표현하기 때문에 전체 요소의 개수를 나타낼 수 있습니다
  size() {
    return this.top;
  }
  //stack에 element를 추가합니다.
  //새롭게 추가될 요소의 인덱스를 나타내는 this.top을 키로, 요소를 값으로 하여 storage에 할당합니다.this.top은 다음 인덱스를 가리키게 하여 새로운 요소에 대비합니다.
  push(element) {
    this.storage[this.top] = element;
    this.top += 1;
  }
  // stack에서 element를 제거한 뒤 해당 element를 반환합니다.
  // 만약 size가 0이라면 아무 일도 일어나지 않습니다.
  // top-1로 최상단을 설정한 후 변수에 저장하고, 스택에서 삭제합니다.
  // 하나를 제거했으니 top도 감소합니다.
  pop() {
    if (this.size() <= 0) {
      return;
    }
    const result = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top -= 1;
    return result;
  }
}
```