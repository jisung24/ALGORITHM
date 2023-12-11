const solution = (n) => {
    if(n === 1) return 0
    // 여기부턴 1이 아닐 때!
    let count = 1
    while(count <= 500) {
        if(n % 2 === 0) n /= 2 // parseInt 안 해도 어차피 짝수 / 2는 정수야! 
        else if(n % 2 === 1) n = (n * 3) + 1
        
        if(n === 1) return count
        else count += 1
    }
    
    return -1; // 500번 안에 다 끝나지 않았을 때!
}