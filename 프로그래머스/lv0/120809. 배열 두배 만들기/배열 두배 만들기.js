const areAllNumbers = (arr) => arr.some(e => typeof e !== 'number');

function solution(numbers) {
    if(areAllNumbers(numbers)) throw new Error("숫자여야합니다!");
    return numbers.map(number => number * 2);
}