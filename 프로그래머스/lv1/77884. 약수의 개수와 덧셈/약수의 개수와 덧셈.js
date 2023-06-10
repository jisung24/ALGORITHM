function solution(left, right) {
    // 13 - 17 
    // 13, 14, 15, 16, 17의 약수의 개수를 파악한다! => 짝수면 더하고, 홀수면 뺀다. 
    let sum = 0;
    for(let i = left; i <= right; i++) {
        // 13부터 17까지 각각의 수의 약수의 개수 구함! 
        let divisorCnt = 0; // 약수의 개수 => 반복문 안에서 0개부터 싹 다 세줘야 해! 
        for(let j = 1; j <= i; j++) {
            if (i % j === 0) divisorCnt += 1;
        }
        if(divisorCnt % 2 === 0) sum += i;
        else sum -= i;
    }
    
    return sum;
}