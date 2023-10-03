const addNumbers = (arr = []) => {
    return arr.reduce((acc, cur) => acc + cur);
}
const solution = (arr) => {
    return addNumbers(arr) / arr.length;
}