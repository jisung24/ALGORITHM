const calculateSumBetween = (firstNumber, lastNumber) => {
    const biggerNumber = Math.max(...[firstNumber, lastNumber]);
    const smallerNumber = Math.min(...[firstNumber, lastNumber]);

    let sum = 0; // 3 3일 때 sum을 smaller로 해버리면 3이 나옴 
    for(let i = smallerNumber; i <= biggerNumber; i++) sum += i;
    
    return sum;
}

const solution = (a, b) => {
    return calculateSumBetween(a, b);
}