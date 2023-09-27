function solution(n) {
    return Number(Array.from(String(n), Number)
    .sort((a, b) => {
        if(a > b) return -1;
        if(a < b) return 1;
    })
    .join(''));
}