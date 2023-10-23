function solution(my_string) {
    // 반복문 1번에 할 수 있는 과정! 
    // - 숫자를 전부 골라서 배열에 넣는 과정까지 할 수 있음! 
    const answer = [];
    for(let i = 0; i < my_string.length; i++) {
        if(!isNaN(Number(my_string[i]))) {
            answer.push(my_string[i]);
        }
    }
    
    return answer.map(Number)
    .sort((a, b) => {
        if(a > b) return 1;
        if(a < b) return -1;
    })
}