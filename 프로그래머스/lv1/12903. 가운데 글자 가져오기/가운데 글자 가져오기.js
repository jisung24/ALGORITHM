function solution(s) {
    // 만약 s의 길이가 짝수라면 2글자 반환...! 
    let answer = '';
    if(s.length % 2 === 0) {
        answer += (s[(s.length / 2) - 1] + s[s.length / 2]);
    }else{
        answer += s[parseInt(s.length / 2)]
    }
    
    return answer;
}