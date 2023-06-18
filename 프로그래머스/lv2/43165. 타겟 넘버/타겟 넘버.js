function solution(numbers, target){
    // 숫자 배열, 합하거나 빼서 나올 수
    let answer = 0;
    function dfs(level, sum) {
        if(level === numbers.length){
            if(target === sum) answer += 1; 
            // answer은 같을 경우의 수! 
            else return; // undefined! 
        }else{
            // 아직 연산이 남았을 경우! 
            // 재귀호출 부분! 
            dfs(level + 1, sum + numbers[level]);
            dfs(level + 1, sum - numbers[level]);
        }
    }
    dfs(0, 0);
    return answer;
}