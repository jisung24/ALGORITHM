function solution(numbers) {
    const total = [1,2,3,4,5,6,7,8,9].reduce((acc, cur) => acc + cur);
    return total - numbers.reduce((acc, cur) => acc + cur);
}