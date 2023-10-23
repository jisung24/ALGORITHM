function solution(array) {
    // 가장 큰 수 찾기! 
    // 즉 모든 원소를 다 알고있어야 함! 
    let maxValue = 0;
    let maxIndex = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > maxValue) {
            maxValue = array[i];
            maxIndex = i;
        }
    }
    
    return [maxValue, maxIndex];
}