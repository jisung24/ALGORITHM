// 두 정수를 붙인다 
// ab와 ba를 비교해서 큰 값을 호출!
function solution(a, b) {
    const ab = Number(a.toString() + b.toString())
    const ba = Number(b.toString() + a.toString())
    return ab > ba ? ab : ba;
}