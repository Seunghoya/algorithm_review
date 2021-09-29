# 프린터

### 문제
김코딩은 최근 인쇄할 일이 많이 생겨 창고에서 안 쓰던 프린터를 꺼냈습니다. 이 프린터의 성능을 테스트하여 새로운 프린터를 장만할지 결정하려고 합니다. 김코딩은 프린터의 인쇄 작업 목록의 크기와 최대 용량을 가정하고 각기 다른 용량의 문서를 차례대로 인쇄하여 모든 문서가 인쇄되는데 최소 몇 초가 걸리는지 테스트하기로 했습니다. 프린터 인쇄 작업 목록의 제한사항은 다음과 같습니다.

[제한사항]
> 인쇄 작업 목록은 칸으로 이루어져 있습니다.<br>
각 칸에는 한 개의 문서만 위치할 수 있습니다.<br>
문서는 1초에 한 칸만 이동할 수 있습니다.<br>
인쇄 작업 목록의 크기는 bufferSize이고 최대 용량 capacities 만큼 문서를 담을 수 있습니다.<br>

만약, 인쇄 작업 목록의 크기가 2이고 최대 용량이 10Kib라면 크기가 [7, 4, 5, 6] Kib인 문서들이 최단 시간 안에 순서대로 모두 인쇄되는 과정은 다음과 같습니다.<br>

1. 1초가 지나면 인쇄 작업 목록에는 7Kib 크기의 문서가 추가됩니다.
<br>
2. 2초일 때 인쇄 작업 목록의 최대 용량이 10Kib이기 때문에 4Kib 문서는 작업 목록에 들어갈 수 없습니다. 동시에 7Kib 문서는 작업 목록에서 1칸 앞으로 이동합니다.
<br>
3. 3초일 때 7Kib 문서는 인쇄 작업 목록에서 나와 프린터가 인쇄합니다. 동시에 4Kib 문서는 인쇄 작업 목록에 추가됩니다.
<br>
4. 4초일 때 4Kib 문서는 인쇄 작업 목록에서 1칸 앞으로 이동합니다. 동시에 5Kib 문서는 인쇄 작업 목록에 추가됩니다.
<br>
5. 5초일 때 4Kib 문서는 인쇄 작업 목록에서 나와 프린터가 인쇄합니다. 동시에 5Kib 문서는 인쇄 작업 목록에서 1칸 앞으로 이동합니다. 최대 용량 10Kib 제한으로 6Kib 문서는 인쇄 작업 목록으로 추가될 수 없습니다.
<br>
6. 6초일 때 5Kib 문서는 인쇄 작업 목록에서 나와 프린터가 인쇄합니다. 동시에 6Kib 문서가 인쇄 작업 목록에 추가됩니다.
<br>
7. 7초일 때 6Kib 문서는 인쇄 작업 목록에서 1칸 앞으로 이동합니다.
<br>
8. 8초일 때 6Kib 문서가 마지막으로 인쇄됩니다.
<br>
위 예시에서와 같이 모든 문서가 출력되는데 걸리는 최소 시간은 8초가 걸립니다.

김코딩이 가지고 있는 프린터의 제한사항인 인쇄 작업 목록의 크기 bufferSize, 최대 용량 capacities가 주어집니다. 인쇄할 문서의 크기가 나열된 배열 documents가 모두 인쇄되는데 걸리는 최소 시간을 반환하는 솔루션을 만들어 주세요.

### 입력
인자1: bufferSize
Number 타입의 인쇄 작업 목록 크기
인자 2: capacities
Number 타입의 인쇄 작업 목록에 추가될 수 있는 최대 용량
인자 3: documents
Number 타입을 요소로 갖는 문서 크기가 나열된 배열

### 출력
Number 타입을 리턴해야 합니다.

### 주의사항
bufferSize는 1 이상 100 이하입니다.
capacities는 100Kib 이하입니다.
인쇄할 문서의 개수(배열의 길이) 1이상 100 이하입니다.
문서 하나의 크기는 capacities를 초과하지 않습니다.

### 입출력 예시
```js
let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];

let output = queuePrinter(bufferSize, capacities, documents);
console.log(output) // 8
```

### 내가 작성한 코드
```js
function queuePrinter(bufferSize, capacities, documents) {
  let count = 0;
  let size = 0
  let queue = []
  let currentDocument = documents.shift();
  
  for(let i = 0; i < bufferSize; i++) {
    queue.push(0)             // queue 길이를 bufferSize만큼 늘려준다.
  }
  // 기본 동작 
  queue.unshift(currentDocument); // documents 배열에서 0번째 인덱스를 하나씩 빼서 빈배열 큐에 넣어주고
  queue.pop();                    // queue 마지막 요소 삭제
  size += currentDocument;        // 큐 사이즈는 documents 크기만큼 더해준다
  count++                         // 1초 증가

  while (size > 0) {
    size -= queue.pop()
    currentDocument = documents.shift();

    if (currentDocument + size <= capacities){  // 조건1. 현재 문서가 큐에 들어갔을 때 최대 용량을 초과하지 않는 경우
      queue.unshift(currentDocument)            // 큐에 currentDocument를 넣어주고
      size += currentDocument                   // 사이즈에 currentDocument만큼 더해준다.
    }
    else if (currentDocument + size > capacities) {  // 조건2. 현재 문서가 큐에 들어갔을 때 최대 용량을 초과하는 경우
      documents.unshift(currentDocument);            // 도큐먼트에 currentDocument를 넣어주고
      queue.unshift(0);                              // queue에는 0을 넣어준다.

    }
    count++  // 1초 증가
  }
  return count
}

```

### 레퍼런스 코드
```js
function queuePrinter(bufferSize, capacities, documents) {
    let count = 0;
    let queue = [];
    let totalBufferVolume = 0;

    // queue에 bufferSize만큼 0을 삽입합니다. (queue에 들어갈 요소의 고정 갯수를 만들어 주는 과정입니다.)
    for(let i = 0; i < bufferSize; i++){
        queue.push(0);
    }
    
    // ~23번째 줄까지의 코드는 프린터를 처음 실행했을 때를 다룹니다.
    // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당합니다.
    let currentDocument = documents.shift();
    
    // queue의 제일 앞에 currnetDocument를 삽입하고, 제일 마지막 요소를 없앱니다.
    queue.unshift(currentDocument);
    queue.pop();
    
    // totalBufferVolume(총 용량)에 currnetDocument의 크기를 합칩니다.
    totalBufferVolume = totalBufferVolume + currentDocument;

    // 1 초가 지났다는 것을 count를 증가하며 나타냅니다.
    count++;
    
    // totalBufferVolume(총 용량)가 0이 될 때까지 반복합니다.
    while(totalBufferVolume){
        
        // totalBufferVolume(총 용량)에 queue에 있는 마지막 요소의 용량을 제거합니다.
        totalBufferVolume = totalBufferVolume - queue.pop();
        
        // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당합니다.
        currentDocument = documents.shift();
        
        // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 작거나 같다면
        if(currentDocument + totalBufferVolume <= capacities){

            // queue에 currentDocument를 삽입하고 totalBufferVolume(총 용량)에 currentDocument 용량을 추가합니다.
            queue.unshift(currentDocument);
            totalBufferVolume = totalBufferVolume + currentDocument;

            // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 크다면
        }else{

            // 다시 documents에 currentDocument를 집어넣고 queue에는 0을 삽입합니다.
            documents.unshift(currentDocument);
            queue.unshift(0);
        }

        // 한 번 반복할 때마다 count(초)를 올립니다.
        count++;
    }
    
    // count를 반환합니다.
    return count;
}
```