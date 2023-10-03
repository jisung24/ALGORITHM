const checkIsBiggerThanZero = (num1, num2) => num1 >= 0 && num2 >= 0;

const checkType = (num1, num2) => {
    return typeof num1 === 'number' && typeof num2 === 'number'
}
function solution(num1, num2) {
    if(!checkIsBiggerThanZero(num1, num2) || (!checkType(num1, num2))) throw new Error("type error");
    return num1 === num2 ? 1 : -1;
}