const checkNumberType = (number) => {
    return typeof number === 'number';
}

const checkEvenNumber = (number) => {
    return number % 2 === 0;
}
const solution = (number) => {
    if(!checkNumberType(number)) throw new Error("숫자를 입력받아야 합니다!");
    return checkEvenNumber(number) ? "Even" : "Odd";
}