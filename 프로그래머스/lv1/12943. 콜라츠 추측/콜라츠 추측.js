const checkNumberType = number => typeof number === 'number';

const solution = (number) => {
    if(!checkNumberType(number)) throw new Error("숫자가 아닙니다!");
    if(number === 1) return 0;
    let tryCount = 1;
    while(tryCount <= 500) {
        if(number % 2 === 0) number /= 2; // 어차피 짝수면 나눠떨어짐.
        else if(number % 2 === 1) number = (number * 3) + 1
        
        if(number !== 1) tryCount += 1;
        else return tryCount;
    }
    // 500번까지 안 됐을 때! 
    return -1;
}