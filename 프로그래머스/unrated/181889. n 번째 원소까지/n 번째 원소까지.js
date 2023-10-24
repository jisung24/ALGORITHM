function solution(num_list, n) {
    const answer = [];
    for(let i = 0; i <= n - 1; i++) {
        answer.push(num_list[i]);
    }
    
    return answer;
}