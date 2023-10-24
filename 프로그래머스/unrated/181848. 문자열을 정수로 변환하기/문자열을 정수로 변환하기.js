function solution(n_str) {
    return parseInt(n_str);
}

// parseInt : 일단 모든 type을 다 정수로 바꿔주는데, 정수가 아닐 경우, NaN을 반환 

// parseInt
    // console.log(parseInt("4")); // 4
    // console.log(parseInt("안녕")); // NaN 
    // console.log(parseInt(true)); // NaN 
    // console.log(parseInt(undefined)); // NaN 
    // console.log(parseInt(4.56)); // 4
    // console.log(parseInt(null)); // NaN