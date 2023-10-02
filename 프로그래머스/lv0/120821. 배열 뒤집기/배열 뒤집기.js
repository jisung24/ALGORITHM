// 1. reverse 
// 2. stack
function solution(num_list) {
    const stack = [];
    for(let i = num_list.length - 1; i >= 0; i--){
        stack.push(num_list[i]);
    }
    return stack;
}