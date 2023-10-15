// slice : 피자 조각 수 
// n : 피자를 먹는 사람의 수
function solution(slice, n) {
    let pizzaCnt = 1;
    while(slice * pizzaCnt < n){
        pizzaCnt += 1;
    }
    
    return pizzaCnt;
}