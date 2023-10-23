const getGCD = (num1, num2) => {
    let gcd = 0;
    const minNumber = Math.min(...[num1, num2]);

    for(let i = 2; i <= minNumber; i++) {
        if(num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        } 
    }

    return gcd === 0 ? undefined : gcd;
}

function solution(num1, num2, num3, num4) {
    const denom = num2 * num4;
    const numer = (num1 * num4) + (num2 * num3);

    const gcd = getGCD(denom, numer);
    return !gcd ? [numer, denom] : [numer / gcd, denom / gcd];
}