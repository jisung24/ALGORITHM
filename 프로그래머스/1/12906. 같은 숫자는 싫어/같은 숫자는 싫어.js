// 앞에 있는 값이랑 같으면... out! 
// 가장 최근 값...! 
// stack에 넣으면 돼! 
// arr의 크기 => 최소 1 
function solution(arr) {
    const stack = [arr[0]] 
    
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== stack[stack.length - 1]) stack.push(arr[i])
    }
    
    return stack
}