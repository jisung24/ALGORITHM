function solution(n, control) {
    // 반복문...
    const result = control.split('').reduce((acc, cur) => {
        if(cur === 'w') acc += 1
        else if(cur === 's') acc -= 1
        else if(cur === 'd') acc += 10
        else if(cur === 'a') acc -= 10
        return acc
    }, n)
    
    return result
}

// w => n += 1
// s => n -= 1
// d => n += 10
// a => n -= 10