function solution(my_string) {
    // 1. 일단 숫자가 아닌 것들은 전부 없앤다! 
    let new_string = '';
    let sum = 0;
    for(let i = 0; i < my_string.length; i++) {
        if(!isNaN(Number(my_string[i]))) sum += Number(my_string[i]);
    }
    
    return sum;
}