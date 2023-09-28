const solution = (n) => {
    // 짝수의 합 
    if(n === 0 || n === 1) return 0;
    let sum = 0;
    for(let i = 2; i <= n; i++) {
        if(i % 2 === 0) sum += i;
    }
    
    return sum;
}