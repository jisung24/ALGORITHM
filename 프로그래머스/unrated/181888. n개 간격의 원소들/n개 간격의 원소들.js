function solution(num_list, n) {
    // map or filter 다 가능
    const answer = [num_list[0]]; // 우선 시작원소는 넣고 시작! 
    for(let i = n; i < num_list.length; i++) {
        if(i % n === 0) answer.push(num_list[i])
    }
    
    return answer;
}