// 연속적으로 나타나는 숫자 제거 => 넣고, stack마지막 숫자랑 같으면 그냥 out! 
function solution(arr)
{
    let stack = [arr[0]]; // 첫 번째 값은 넣고 시작.!
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] !== stack[stack.length - 1]) stack.push(arr[i]);
        // 즉 같지 않아야만 넣을 수 있어! => 가장 마지막에 있는 값과 비교하는게 stack이야! 
        // 1. 현재 대기하는 값과 마지막값을 비교하는 경우, 즉 마지막 값에 따라서 현재 오는 값의 운명이 정해진다. 
    }
    
    return stack;
}