"use strict"
// 뒤로가기 (0이 나오면 뒤로가기 진행!)
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number)

const stack = []
const tc = input[0]
for (let i = 1; i <= tc; i++) {
  if (input[i] !== 0) stack.push(input[i])
  else stack.pop()
}

console.log(stack.reduce((acc, cur) => acc + cur, 0))
