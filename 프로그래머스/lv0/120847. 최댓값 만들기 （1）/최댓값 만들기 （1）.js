// 그냥 가장 큰 2개의 수 곱하면 됨
function solution(numbers) {
    const sortedArr = numbers.sort((a, b) => {
        if(a < b) return -1;
        if(a > b) return 1;
    })
    console.log(sortedArr);
    return sortedArr.at(-1) * sortedArr.at(-2);
}