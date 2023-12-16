function sumOfOddNumbers(odds) {
    return odds.reduce((acc, cur) => acc + cur, 0)
}

function powOfEvenNumbers(evens){
    return evens.map(number => number * number).reduce((acc, cur) => acc + cur, 0)
}
function solution(n) {
    return n % 2 === 1 ? sumOfOddNumbers(Array.from({length: n}, (_, i) => i + 1).filter(number => number % 2 === 1)) : powOfEvenNumbers(Array.from({length : n}, (_, index) => index + 2).filter(number => number % 2 === 0))
}