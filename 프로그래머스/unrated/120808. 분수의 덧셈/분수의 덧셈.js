const getGCD = (num1, num2) => {
    const minNumber = Math.min(num1, num2);
    // 반복문 횟수 줄이기! => 거꾸로
    for(let i = minNumber; i >= 2; i--) {
        if(num1 % i === 0 && num2 % i === 0) {
            return i
        } 
    }
    // 없으면 
    return 0
}

function solution(num1, num2, num3, num4) {
    const denom = num2 * num4;
    const numer = (num1 * num4) + (num2 * num3);

    const gcd = getGCD(denom, numer);
    return gcd === 0 ? [numer, denom] : [numer / gcd, denom / gcd];
}