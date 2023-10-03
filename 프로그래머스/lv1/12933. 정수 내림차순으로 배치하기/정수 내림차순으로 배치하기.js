// 1. 문자열 -> 배열 -> 숫자 한 번에 묶기 (문자열을 숫자타입 배열로 바꿔주기!)
const solution = (n) => {
    return Number(n.toString()
    .split('')
    .map(Number)
    .sort((a, b) => {
        if(a > b) return -1;
        if(a < b) return 1;
        return 0;
    })
    .join(''))
}