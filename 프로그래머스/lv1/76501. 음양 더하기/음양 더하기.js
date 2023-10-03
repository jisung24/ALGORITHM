const sumOfValues = (absolutes, signs) => {
    let sum = 0;
    for(let i = 0; i < signs.length; i++) {
        if(signs[i]) sum += absolutes[i];
        if(!signs[i]) sum -= absolutes[i];
    }
    return sum;
}
function solution(absolutes, signs) {
    return sumOfValues(absolutes, signs);
}