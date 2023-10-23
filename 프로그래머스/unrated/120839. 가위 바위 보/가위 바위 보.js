function solution(rsp) {
    // 가위 : 2
    // 바위 : 0
    // 보 : 5
    let answer = '';
    for(let c of rsp) {
        if(c === '2') answer += '0';
        else if(c === '0') answer += '5';
        else answer += '2';
    }
    
    return answer;
}