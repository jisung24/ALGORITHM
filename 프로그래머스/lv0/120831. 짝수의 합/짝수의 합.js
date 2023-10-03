function solution(n) {
    let sum = 0;
    if(n === 1) return 0;
    for(let i = 2; i <= n; i++) {
        if(i % 2 === 0) sum += i;
    }
    
    return sum;
}