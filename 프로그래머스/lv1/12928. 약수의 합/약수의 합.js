// 1. 약수 구하기 
// 2. 배열(약수들)의 합

// 여긴 2이상만 들어옴! 
const divisors = (n) => {
    const arr = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) arr.push(i);
    }
    
    return arr;
}
const sumOfDivisors = (arr) => {
    return arr.reduce((acc, cur) => acc + cur);
}

const solution = (n) => {
    if(n === 0 || n === 1) return n;
    return sumOfDivisors(divisors(n));
}