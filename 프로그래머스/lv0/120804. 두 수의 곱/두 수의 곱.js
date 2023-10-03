const checkNumber = (num1, num2) => {
    return num1 >= 0 && num2 >= 0 && typeof num1 === 'number' && typeof num2 === 'number';
}

const multiply = (num1, num2) => {
    if(!checkNumber(num1, num2) ) throw new Error("두 수는 자연수여야 합니다!")
    return num1 * num2;
}
function solution(num1, num2) {
    return multiply(num1, num2);
}