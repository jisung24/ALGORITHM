// 1. 짝수이면 Even, 홀수이면 Odd 

// - 짝수, 홀수 판별해주는 함수! 
const isEven = (number) => number % 2 === 0; 
const solution = (number) => {
    return isEven(number) ? "Even" : "Odd";
}