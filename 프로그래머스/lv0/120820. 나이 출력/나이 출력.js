const checkIsNumber = (age) => {
    return typeof age === 'number';
}
const getUserBirthYear = (age) => {
   if(!checkIsNumber(age)) throw new Error("나이는 number type이어야합니다!")
    return 2022 - age + 1; 
}
function solution(age) {
    return getUserBirthYear(age);
}