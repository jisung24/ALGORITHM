function solution(number) {
    let sum = 1;
    if(typeof number !== 'number') throw new Error("자연수가 와야합니다...!");
    if(number === 0 || number === 1) return number;
    // 0과 1은 제외함 위에서! 
    for(let i = 2; i <= number; i++) {
        if(number % i === 0) sum += i;
    }
    
    return sum;
}