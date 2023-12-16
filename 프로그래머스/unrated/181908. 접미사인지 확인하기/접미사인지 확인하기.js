function solution(myString, isSuffix) {
    return myString.endsWith(isSuffix) ? 1 : 0
}

// "banana"는 "banana"로 끝나고 
// "anana"로 끝나고 
// "nana"로 끝나고
// "ana"로 끝나고
// "na"로 끝나고
// "a"로 끝난다