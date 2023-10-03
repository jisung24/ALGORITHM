const checkHasZero = (dot) => {
    return dot.some(e => e === 0);
}

function solution(dot) {
    if(checkHasZero(dot)) throw new Error("0이 포함 돼 있어서 이상한 좌표입니다!");
    const [dotX, dotY] = dot;
    
    if(dotX > 0 && dotY > 0) return 1; 
    if(dotX > 0 && dotY < 0) return 4;
    if(dotX < 0 && dotY > 0) return 2;
    if(dotX < 0 && dotY < 0) return 3;
    return;
}