"use strict";

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
    const value = this.queue[this.front];
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

function solution(graph) {
  let answer = 1;
  let visited = graph;
  const queue = new Queue(); // 큐 생성
  const dx = [-1, 1, 0, 0]; // 상 하 좌 우
  const dy = [0, 0, -1, 1];
  const n = graph.length; // 세로길이
  const m = graph[0].length; // 가로길이

  queue.enqueue([0, 0]);
  visited[0][0] = 0;

  while (queue.size() > 0) {
    let size = queue.size();

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.dequeue();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
          if (nx == n - 1 && ny == m - 1) {
            return ++answer;
          }
          queue.enqueue([nx, ny]);
          visited[nx][ny] = 0;
        }
      }
    }
    answer++;
  }
  return -1;
}
