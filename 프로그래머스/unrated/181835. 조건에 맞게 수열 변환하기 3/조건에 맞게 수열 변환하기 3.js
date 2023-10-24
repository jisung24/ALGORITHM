function solution(arr, k) {
    const newArr = arr.map(e => {
        if(k % 2 === 1) return k * e;
        if(k % 2 === 0) return k + e
    })
    
    return newArr;
}