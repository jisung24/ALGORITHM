function solution(n) {
    // 가장 작은 자연수 찾기 => while에서 가장 빨리 반환되는거! 
    let x = 1;
    while(true) {
        if(n % x === 1) return x;
        x += 1;
    }
}