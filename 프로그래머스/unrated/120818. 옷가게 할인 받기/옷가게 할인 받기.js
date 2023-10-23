function solution(price) {
    // 이런문제 무조건 if에서 걸러주기! 
    if(price >= 100000 && price < 300000) return parseInt(price *= 0.95);
    if(price >= 300000 && price < 500000) return parseInt(price *= 0.9);
    if(price >= 500000) return price *= 0.8
    return price;
}