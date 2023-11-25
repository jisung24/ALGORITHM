function solution(numbers) {
  // numbers크기 순서대로 정렬!
  numbers = numbers.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
  });

  return numbers[parseInt(numbers.length / 2)];
}
