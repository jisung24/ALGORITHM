// 10인분 당 음료수 1개 서비스 
// 52인분이면 음료수 5개 값 빼면 돼! 

// 양꼬치 n인분 
// 음료수 k - (parseInt(n / 10))개로 계산하면 돼! 
function solution(n, k) {
    return (12000 * n) + 2000 * (k - parseInt(n / 10));
}