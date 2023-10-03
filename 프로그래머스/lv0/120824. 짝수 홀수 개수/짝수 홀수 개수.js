const isWholeNumbers = (arr) => arr.some(e => typeof e !== 'number')

const getCountOfEvenNumber = (arr) => {
    if(isWholeNumbers(arr)) throw new Error("숫자가 아닌 값이 있습니다!")
    return arr.filter(e => e % 2 === 0).length;
}
function solution(num_list) {
    return [getCountOfEvenNumber(num_list), num_list.length - getCountOfEvenNumber(num_list)];
}