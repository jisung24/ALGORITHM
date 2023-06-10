function solution(arr) {
    // 가장 작은 수..! 
    if(arr.length === 1) return [ -1 ]; // 원래 길이가 1인 배열은 제거하면 빈 배열로 바뀜.
    else { // 1이상인 배열..! 
        // 배열에 같은수는 존재하지 않음..! 
        let minValue = Math.min(...arr);
        let answer = [];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] !== minValue) answer.push(arr[i]);
        }
        
        return answer;
    }
    
}