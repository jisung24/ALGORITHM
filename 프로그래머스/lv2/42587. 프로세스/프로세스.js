class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  // { queue : [], front : 0, rear : 0 }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    let value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}


function solution(arr, location) {
    // 어떤 값이 나가야하는지, 비교해주기 위함!
    let count = 0;
    let max = [ ...arr ].sort((a, b) => {
        if(a > b) return -1;
        else if(a < b) return 1;
    })
    
    // 큐 생성 후 초기화! 
    let queue = new Queue(); 
    for(let i = 0; i < arr.length; i++) {
        queue.enqueue([arr[i], i]);
    }
    
    while(queue.size() > 0) {
        if(queue.peek()[0] < max[count]) {
            // 못 나감! 
            queue.enqueue(queue.dequeue()); 
        }else{
            // 나갈 수 있는데...! 
            let value = queue.dequeue();
            if(value[1] === location) {
                // 내가 나갈 차례라면...! 
                count += 1;
                return count;
            }else{
                // 내 차례가 아니라면..! 
                count += 1;
            }
        }
    }
    
    return count
}