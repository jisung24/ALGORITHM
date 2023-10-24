function solution(arr1, arr2) {
    if(arr1.length !== arr2.length){ // 배열의 길이가 다르다면! 
        return arr1.length > arr2.length ? 1 : -1;
    }else{ // 길이가 같아! 
        const sumOfArr1 = arr1.reduce((acc, cur) => acc + cur, 0);
        const sumOfArr2= arr2.reduce((acc, cur) => acc + cur ,0);
        return sumOfArr1 > sumOfArr2 ? 1 : sumOfArr1 === sumOfArr2 ? 0 : -1 
    }
}