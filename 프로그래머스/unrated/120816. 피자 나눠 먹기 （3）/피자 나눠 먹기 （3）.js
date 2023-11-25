function solution(slice, n) {
  let pizza = 1;

  while (slice * pizza < n) {
    pizza += 1;
  }
  return pizza;
}