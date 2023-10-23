function solution(box, n) {
    let sum = 1;
    
    for(let i = 0; i < box.length; i++) {
        sum *= parseInt(box[i] / n)
    }
    
    return sum;
}