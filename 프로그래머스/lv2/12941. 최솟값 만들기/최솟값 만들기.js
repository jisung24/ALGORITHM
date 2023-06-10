function solution(A,B){
    // 길이가 같은 배열 => [1,2,3] [4,5,6]
    // 같은 index숫자를 곱해서 곱이 최소가 되게끔 만들자! 
    
    // A는 오름차순! (원본 바꿔도 상관없어.)
    A = A.sort((a, b) => {
        if(a > b) return 1;
        else if(a < b) return -1
    })
    
    // B는 내림차순 
    B = B.sort((a, b) => {
        if(a > b) return -1;
        else if(a < b) return 1;
    })
    
    let sum = 0;
    for(let i = 0; i < A.length; i++) {
        sum += (A[i] * B[i]);
    }
    
    return sum;
}