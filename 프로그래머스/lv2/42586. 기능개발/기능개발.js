class Queue{
    constructor() {
        this.queue = [];
        this.front = 0; // 값이 나가는 곳
        this.rear = 0; // 값을 넣는 곳 
    }
    
    enqueue(value) {
        this.queue[this.rear++] = value; 
    }
    
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1; // 삭제했으면 front를 1늘림/
        return value; 
    }
    
    peek() { // { "queue" : [], "front" : 0, "rear" : 0 } 이런식으로 저장돼있음.
        return this.queue[this.front];
    }
    
    size() {
        return this.rear - this.front;
    }
}
function solution(progresses, speeds) {
    let answer = []; // 나간 횟수를 끊어서 담는 배열!!!!!! 
    let outCnt = 0; // 한 번에 나가는 횟수! => 나가는 횟수가 끊길때 0으로 다시 꼭 초기화를 시켜줘야 한다. 
    const queue = new Queue();
    for(let i = 0; i < progresses.length; i++) {
        queue.enqueue([progresses[i], speeds[i]]);
    }
    while(queue.size() > 0) {
        // 🔴 못나가는 조건 🔴
        // 제일 앞에있는 수가 100보다 작을 경우!! 
        // 2번째가 앞에와도 못나가니까 한 번에 큐의 길이만큼을 queue를 순환시켜줘야 돼!
        if(queue.peek()[0] < 100) { 
            if(outCnt !== 0){
                answer.push(outCnt);
                outCnt = 0;
            }
            for(let i = 0; i < queue.size(); i++) {
                let value = queue.dequeue(); // 빼서
                value[0] += value[1] // 더하고
                queue.enqueue(value); // 다시 집어넣어주고! 
            }
        }else{
            queue.dequeue();
            outCnt += 1;
            
            if(queue.size() === 0) {
                // 만약 마지막 요소일경우 if문으로 못 가서 answer에 담지를 못 해
                // 그래서 여기서 담아줘야 해! 
                answer.push(outCnt);
            }
        }
    }
    
    return answer;
}