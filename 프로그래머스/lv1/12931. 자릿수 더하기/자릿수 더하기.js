function solution(n){
    if(typeof n !== 'number') throw new Error("자연수가 필요합니다!")
    return Array.from(String(n), Number).reduce((acc, cur) => acc + cur);
}


// Array.from(배열로 바꾸기 위한 이터러블, 유사배열 객체)
// 1. 이터러블 : 순차적으로 반복문 사용해서 접근할 수 있는 객체 => ex) 배열, 문자열, map, set 등등... 
// -> for of나 다른 반복문 사용해서 접근이 가능하다. 
// 2. 유사배열객체 