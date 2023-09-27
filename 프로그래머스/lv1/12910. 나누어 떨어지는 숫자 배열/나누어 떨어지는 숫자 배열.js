function solution(arr, divisor) {
    const filter = arr.filter(e => e % divisor === 0);
    return filter.length === 0 ? [-1] : filter.sort((a, b) => {
        if(a > b) return 1;
        else if(a < b) return -1;
    });
}