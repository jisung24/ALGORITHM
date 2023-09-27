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

// 일단 문제! 
// 1. a > b, b > a이렇게 나눠서 for문 2번쓰지 말고,
// 아예 작은 수랑 큰 수를 구해서
// 하나로 만들면 돼!