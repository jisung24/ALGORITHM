/**
 * ❗️두 수가 같으면 1, 다르면 -1을 return함
 * @param {*} num1 : 비교할 첫 번째 수 (number)
 * @param {*} num2 : 두번째 수 (number)
 */
const solution = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    throw new Error("둘 다 숫자여야합니다!");
  return num1 === num2 ? 1 : -1;
};
