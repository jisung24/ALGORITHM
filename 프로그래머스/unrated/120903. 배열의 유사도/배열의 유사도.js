// 1. 두 배열 비교! 
// - 두 배열에서 같은 원소의 개수를 구하자! 
// -1) 1개씩 find해보기...! => 
function solution(s1, s2) {
    let count = 0;
    for(let i = 0; i < s2.length; i++) {
        const findOne = s1.find(e => e === s2[i]);
        if(findOne) count += 1; 
    }
    
    return count;
}