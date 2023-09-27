function solution(phone_number) {
    // 뒤에 4개 빼고 전부...! 
    let answer = '';
    for(let i = 0; i < phone_number.length; i++) {
        if(i < phone_number.length - 4) {
            answer += '*'
        }else answer += phone_number[i];
    }
    
    return answer;
}