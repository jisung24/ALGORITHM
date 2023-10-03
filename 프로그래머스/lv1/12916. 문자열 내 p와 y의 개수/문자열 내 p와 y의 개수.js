// 1. s를 전부 대문자로 바꾸기(대소문자 구분 x)
// 2. p와 y의 개수를 구하는 함수
// 3. 같은지 다른지 return해주는 함수!
const getCntOfPAndY = (s) => {
    let [pCnt, yCnt] = [0, 0];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'P') pCnt += 1;
        if(s[i] === 'Y') yCnt += 1;
    }
    
    return [pCnt, yCnt];
}

const checkIsSame = ([pCnt, yCnt]) => {
    return pCnt === yCnt;
}
const solution = (s) => {
    const newS = s.toUpperCase();
    return checkIsSame(getCntOfPAndY(newS));
}