const checkAngleRange = (angle) => {
    return Number.isInteger(angle)
    && angle > 0 && angle <= 180;
}

const getAngleType = (angle) => {
   if(!checkAngleRange(angle)) throw new Error("wrong angle value")
    if(angle > 0 && angle < 90) return 1;
    if(angle === 90) return 2;
    if(angle > 90 && angle < 180) return 3;
    if(angle === 180) return 4;
}
function solution(angle) {
    return getAngleType(angle);
}