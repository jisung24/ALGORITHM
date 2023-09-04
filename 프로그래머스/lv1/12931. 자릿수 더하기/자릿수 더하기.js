function solution(n){
    //  각 자릿수의 합을 구해서 return 
    const arr = n.toString().split('').map(v => Number(v))
    .reduce((acc, cur) => acc + cur);
    
    return arr;
}