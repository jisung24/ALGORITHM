function solution(strList, ex) {
    return strList.reduce((acc, cur) => {
        if(!cur.includes(ex)) acc += cur
        return acc
    }, '')
}

// reduce 
// acc를 중간중간 계속 return 해줘야 돼! 