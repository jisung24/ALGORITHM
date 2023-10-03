// 
const checkSameWithLastNumber = (stack, number) => {
    return stack.at(-1) === number;
}

const solution = (arr) => {
    const stack = [];
    for(let i = 0; i < arr.length; i++) {
        if(stack.length === 0) stack.push(arr[i]); // 처음이면 넣고..! 
        else{
            if(!checkSameWithLastNumber(stack, arr[i])) stack.push(arr[i]);
        }
    }
    
    return stack;
}