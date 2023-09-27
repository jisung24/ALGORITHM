// 자릿수 더하기 
// 1. 쪼개기
// 2. 합 구하기 
const sumOfArray = (arr) => arr.reduce((acc, cur) => acc + cur)

const solution = (N) => {
    const numberArray = Array.from(String(N), Number);
    return sumOfArray(numberArray);
}