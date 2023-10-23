// 일단 무조건 완전 탐색을 가장 먼저 생각해보자! 

function solution(numbers) {
    // 다 음수면...? 0보다 작음!
    let answer = numbers[0] * numbers[1];
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] * numbers[j] > answer) answer = numbers[i] * numbers[j];
        }
    }
    
    return answer;
}