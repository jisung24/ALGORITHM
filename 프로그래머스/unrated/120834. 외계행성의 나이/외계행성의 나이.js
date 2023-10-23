function solution(age) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let ageArr = age.toString().split('').map(Number);
    let answer = '';
    
    for(let i = 0; i < ageArr.length; i++) {
        answer += alpha[ageArr[i]];
    }
    
    return answer;
}