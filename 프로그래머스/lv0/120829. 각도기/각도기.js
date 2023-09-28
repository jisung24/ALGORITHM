// 어떤 각인지 알려주는 함수! 
function solution(angle) {
    if(0 < angle && angle < 90) return 1;
    if(angle === 90) return 2;
    if(angle > 90 && angle < 180) return 3;
    if(angle === 180) return 4;
    // 예외는 문제에서 없다고 나옴!
}