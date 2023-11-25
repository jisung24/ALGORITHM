// 즉 피자의 수를 구하는거니까...
// 피자의 수를 계속 늘려야겠지?
// 근데 왜 늘려? => 사람이 많아서 못 먹는 사람이 생겨!

function solution(n) {
  let pizza = 1;

  while (pizza * 7 < n) {
    pizza += 1;
  }

  return pizza;
}
