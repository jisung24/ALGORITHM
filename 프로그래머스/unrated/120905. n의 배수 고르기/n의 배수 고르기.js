function solution(n, numlist) {
    // 고르기! 
    return numlist.filter(e => e % n === 0);
}