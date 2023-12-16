function multy(numbers) {
    return numbers.reduce((acc, cur) => acc * cur, 1)
}

function sumPow(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0)
    return sum * sum
}
function solution(num_list) {
    return multy(num_list) < sumPow(num_list) ? 1 : 0
}