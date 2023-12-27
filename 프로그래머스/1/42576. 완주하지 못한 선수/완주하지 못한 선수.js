function solution(participant, completion) {
    const map = new Map() // map객체 생성 
    
    // hash 정보 등록! 
    for(let value of participant) {
        if(!map.has(value)) map.set(value, 1)
        else map.set(value, map.get(value) + 1)
    }
    
    // hash에서 정보 빼기!
    for(let value of completion) {
        if(map.has(value)) map.set(value, map.get(value) - 1)
    }
    
    // 무조건 1명만 나오게 되어있어! 
    for(let [key, value] of map) {
        if(value === 1) return key
    }
}