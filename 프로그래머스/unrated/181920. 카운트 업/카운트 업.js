function solution(start_num, end_num) {
    // for도 가능한데... 
    return Array.from({length: end_num - start_num + 1}, (_, index) => index + start_num)
}