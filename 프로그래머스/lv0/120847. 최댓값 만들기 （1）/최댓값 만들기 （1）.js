// 2개를 곱해서 만들 수 있는 최댓값을 return
function solution(numbers) {
    const sortedNumbers = numbers.sort((a, b) => {
        if(a > b) return -1;
        if(a < b) return 1;
    })
    
    return sortedNumbers[0] * sortedNumbers[1];
}