const solution = (s) => {
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') stack.push(s[i]); // 무조건 넣고..! 
        else {
            if(stack.length === 0) return false;
            stack.pop();
        }
    }
    
    return stack.length === 0;
}