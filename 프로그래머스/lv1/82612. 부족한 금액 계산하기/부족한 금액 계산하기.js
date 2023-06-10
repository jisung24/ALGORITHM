function solution(price, money, count) {
    // 처음 탈 땐 price (3원)
    // 2 => 3 * 2 => 6원 
    // 3 
    // ok...! 
    let sum = 0;
    for(let i = 1; i <= count; i++) {
        sum += (price * i)
    }
    
    return sum - money > 0 ? sum - money : 0
}