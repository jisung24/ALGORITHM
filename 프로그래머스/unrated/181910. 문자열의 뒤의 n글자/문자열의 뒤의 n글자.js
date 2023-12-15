function solution(my_string, n) {
    // 뒤에서 n개 끊자! 
    return my_string.slice(my_string.length - n);
}