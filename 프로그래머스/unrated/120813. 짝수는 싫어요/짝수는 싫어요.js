function solution(n) {
    const arr = Array.from({length : n}, (_, i) => i + 1)
    .filter(e => e % 2 === 1);
    
    return arr;
}