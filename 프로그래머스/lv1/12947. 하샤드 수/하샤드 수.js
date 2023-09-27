// 자릿수의 합
function sumOfDigits(number) {
    return Array.from(String(number), Number)
    .reduce((acc, cur) => acc + cur);
}
function solution(x) {
    return x % sumOfDigits(x) === 0
}