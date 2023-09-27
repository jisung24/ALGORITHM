// 느낀 점 
// 1. 지금 프로그래머스 코테에선 제한사항에서 예외처리를 해주고 있음 
// => 예를들어 배열 내부 숫자들이 전부 정수 => 근데 만약 내가 코딩으로 이걸 짠다면, 안에 모두 정수만 들어올 수 있게 예외 처리를 해주는게 맞아. 
function solution(arr) {
   return arr.reduce((acc, cur) => acc + cur) / arr.length;
}