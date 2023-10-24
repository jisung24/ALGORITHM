function LCM(n, m) {
    if(n === m) return n;
    const maxValue = n < m ? m : n;
    let answer = maxValue;
    
    while(answer % n !== 0 || answer % m !== 0) {
        answer += 1;
    }
    
    return answer;
}

function GCM(n, m) {
    if(n === m) return n;
    const minValue = n > m ? m : n;
    
    for(let i = minValue; i >= 1; i--) {
        if(n % i === 0 && m % i === 0) return i;
    }
}
function solution(n, m) {
    return [GCM(n, m), LCM(n, m)]
}