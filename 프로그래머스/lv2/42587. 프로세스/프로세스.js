'use strict';
class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    
    dequeue() {
        let value = this.queue[this.front];
        delete this.queue[this.front]; // 값을 실제로 삭제해준다.
        this.front += 1;
        
        return value;
    }
    
    peek() {
        return this.queue[this.front]; // 가장 먼저 빠질 요소!
    }
    
    size() {
        return this.rear - this.front;
    }
}

//  {"queue":[[2,0],[1,1],[3,2],[2,3]],"front":0,"rear":4}
function solution(arr, location) {
    // 큐에서 빠질 차례가 아니라면, 다시 넣어준다. 
    
    // 빠질 차례가 됨. (몇 등으로 빠지는지 => count에 담는다! )
    // 1. location과 같지 않다면, count += 1;
    // 2. location과 같다면(내 차례라면) count출력!
    
    // 여기서 하나하나 해준다. 
    let maxArr = [ ...arr ].sort((a, b) => {
        if(a > b) return -1;
        else if(a < b) return 1;
    })
    let index = 0;
    let count = 0; // 몇 번째로 나가는지! (변수)
    let queue = new Queue(); // 큐 생성! 
    for(let i = 0; i < arr.length; i++) {
        queue.enqueue([arr[i], i]); 
    }
    
    while(queue.size() > 0) {
        if(maxArr[index] > queue.peek()[0]) {
            // 아직 나가면 안 돼!!
            queue.enqueue(queue.dequeue()); 
        }else{
            // 나가도 돼! 
            let value = queue.dequeue();
            if(value[1] === location) {
                count += 1;
                return count;
            }else{
                // 내 차례가 아니라면! 
                count += 1;
                index += 1; // 일단 나갔으니까 index를 올려줌
            }
        }
    }
}