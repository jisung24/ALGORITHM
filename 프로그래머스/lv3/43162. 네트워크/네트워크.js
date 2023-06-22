function dfs(graph, startNode, visited) {
    // graph, visited는 저쪽 함수에 있는 거니까 접근을 못 함..! 
    visited[startNode] = true;
    
    for(let linked of graph[startNode]) {
        if(!visited[linked]) {
            visited[linked] === true;
            dfs(graph, linked, visited);
        }
    }
}
function solution(n, computers) {
    // 노드 개수 
    let node = n;
    
    // 그래프 틀 잡아주기..! 
    let graph = [...new Array(n)].map(v => []);
    let visited = [...new Array(n)].fill(false); 
    
    // 연결 정보 초기화 해주기...! 
    for(let i = 0; i < computers.length; i++) {
        for(let j = 0; j < computers[i].length; j++) {
            if(computers[i][j] === 1) {
                // 연결이 되어 있다는 거야...! 
                graph[i].push(j);
            }
        }
    }
    let cnt = 0;
    for(let i = 0; i < visited.length; i++){
        if(visited[i] === false) {
            dfs(graph, i, visited);
            cnt += 1;
        }
    }
    
    return cnt;
}