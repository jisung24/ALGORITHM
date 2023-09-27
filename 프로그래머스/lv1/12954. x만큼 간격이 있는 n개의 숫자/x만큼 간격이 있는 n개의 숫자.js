function solution(x, n) {
    const answer = [];
    const jump = x;
    while(n) {
        answer.push(x);
        x += jump;
        n--
    }
    return answer;
}