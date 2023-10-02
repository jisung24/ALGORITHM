// N번은 무조건 반복을 해야함
function solution(array, n) {
    const cntOfN = array.filter(e => e === n).length;
    return cntOfN;
}