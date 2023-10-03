const checkHasZero = (dot) => {
    return dot.some(e => e === 0);
}

const checkDotsRange = (dot) => {
    return (!checkHasZero(dot)) && dot.every(e => (e >= -500 && e <= 500))
}
function solution(dot) {
    if(!checkDotsRange(dot)) throw new Error("예외 발생!");
    const [dotX, dotY] = dot;
    
    if(dotX > 0 && dotY > 0) return 1; 
    if(dotX > 0 && dotY < 0) return 4;
    if(dotX < 0 && dotY > 0) return 2;
    if(dotX < 0 && dotY < 0) return 3;
    return;
}