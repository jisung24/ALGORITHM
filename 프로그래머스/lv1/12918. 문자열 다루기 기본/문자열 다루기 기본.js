function solution(s) {
    // 안에 숫자로만 구성이 되어 있는지...! 
    let isNumber = true;
    for(let i = 0; i < s.length; i++) {
        // 어차피 영문 or 숫자로 이루어져있음! 
        if(isNaN(s[i]) === true){
            isNumber = false; // 숫자가 아님. 
            break;
        }
    }

    if((s.length === 4 || s.length === 6) && isNumber) return true;
    else return false;
}