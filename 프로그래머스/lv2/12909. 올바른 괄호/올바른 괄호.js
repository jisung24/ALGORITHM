function solution(s){
    // 괄호 => 가장 마지막에 추가된 열린 괄호부터 닫혀야돼! => 마지막이 먼저? => stack 
    // 숫자로 한 번 풀어볼게 => 메모리 절약 가능! 
    let stack = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') stack += 1; // 1
        else{
            if(stack === 0) return false;
            else stack -= 1;
        }
    }
    
    return stack === 0;
}