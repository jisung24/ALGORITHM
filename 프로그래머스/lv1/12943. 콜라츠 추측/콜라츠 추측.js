function solution(number) {
    if(number === 1) return 0;
    
    let count = 1;
    while(count <= 500) { // 500번의 기회! 
        if(number % 2 === 0) {
            number /= 2;
        }else number = number * 3 + 1;
        // if if로 처리하면 뭐가 문제냐면... 
        // if에서 연산이 끝났는데, 다음 if문을 만족시킬 수 있음 
        
        
        if(number === 1) return count;
        count += 1;
    }
    return -1;
}