function solution(n, k) {
    return Array.from({ length: n }, (_, index) => index + 1).filter(e => e % k === 0)
}

