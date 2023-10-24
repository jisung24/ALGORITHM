function solution(s) {
    // 2차원 배열 => 
    const sArr = s.split(" ").map(e => {
        // 각 e에 대해서...! 
        let answer = '';
        for(let i = 0; i < e.length; i++){
            if(i % 2 === 0) answer += e[i].toUpperCase();
            else answer += e[i].toLowerCase();
        }
        
        return answer;
    }) 
    
    return sArr.join(' ')
}