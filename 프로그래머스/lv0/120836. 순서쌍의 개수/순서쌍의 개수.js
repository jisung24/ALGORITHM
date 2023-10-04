function solution(n) {
    const arr = Array.from({ length : n }, (_, index) => index + 1).reduce((acc, cur) => {
        if(n % cur === 0) acc += 1;
        
        return acc;
    }, 0)
    
    return arr;
}