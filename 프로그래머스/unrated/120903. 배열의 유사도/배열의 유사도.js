// 1. 두 배열 비교! 
// - 두 배열에서 같은 원소의 개수를 구하자! 
// -1) 1개씩 find해보기...! => 
function solution(s1, s2) {
    // s1에 있으면서도 s2에 있는 원소들! 
    return s1.filter(e => s2.includes(e)).length;
}