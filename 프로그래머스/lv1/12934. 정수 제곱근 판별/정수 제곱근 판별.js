function checkNumberType(number) {
    return Number.isInteger(number) && number >= 0;
}
function solution(n) {
    if(checkNumberType(Math.sqrt(n))) {
        return Math.pow(Math.sqrt(n) + 1, 2);
    }
    return -1
}