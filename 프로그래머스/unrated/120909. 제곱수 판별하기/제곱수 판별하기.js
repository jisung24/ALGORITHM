function solution(n) {
    // 어떤 수에서 과연 제곱을 해서 n이 되었는지! 
    return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? 1 : 2
}