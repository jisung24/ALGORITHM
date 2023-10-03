const checkNumberType = arr => arr.some(e => typeof e !== 'number');
const getSumOfNumbers = (arr) => {
    if(checkNumberType(arr)) throw new Error("배열은 전부 number type이어야 합니다!");
    return arr.reduce((acc, cur) => acc + cur, 0);
} 

function solution(n){
    if(typeof n !== 'number') throw new Error("자연수가 필요합니다!")
    return getSumOfNumbers(Array.from(String(n), Number));
}

// Array.from 첫 번째 파라미터 안에는 배열로 바꿀 이터러블 한 객체가 들어가야한다. 
// 하지만 지금 첫 번째 파라미터는 배열로 바꿀 이터러블 객체가 없고,
// 자연수가 있다. => 문자열로 바꿔서 넣어준다

// 2번째 파라미터 : 어떤 타입으로 넣을 것인가.. 