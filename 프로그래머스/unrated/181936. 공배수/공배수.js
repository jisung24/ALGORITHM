function solution(number, n, m) {
    return (number % n === 0 && number % m === 0) ? 1 : 0;
}

// 최소 공배수 while문 때려야 함 => 만족하는 수 바로 return