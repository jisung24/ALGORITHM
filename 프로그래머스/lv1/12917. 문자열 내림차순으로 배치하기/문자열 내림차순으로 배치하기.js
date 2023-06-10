function solution(s) {
    // 내림차순! 정렬로...! 
    let sArr = s.split('').sort((a, b) => {
        if(a > b) return -1;
        else if(a < b) return 1;
    })
    
    return sArr.join('');
}