function solution(array) {
    return array.sort((a, b) => {
        if(a > b) return -1;
        if(a < b) return 1;
    })[parseInt(array.length / 2)]
}