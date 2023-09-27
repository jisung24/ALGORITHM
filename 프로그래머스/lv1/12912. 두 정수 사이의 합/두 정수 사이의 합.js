function solution(a, b) {
    // a와 b의 크기를 일단 정렬...!
    if(a === b) return a;
    const min = Math.min(...[a, b]);
    const max = Math.max(...[a, b]);
    let sum = min;
    for(let i = min + 1; i <= max; i++) {
        sum += i;
    }
    
    return sum;
}