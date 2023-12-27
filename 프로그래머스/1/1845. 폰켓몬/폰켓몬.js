function solution(poketmon) {
    let canGet = poketmon.length / 2 // parseInt필요없어 어차피 짝수라서!
    
    const map = new Map()
    for(let value of poketmon) {
        if(!map.has(value)) map.set(value, 1)
        else map.set(value, map.get(value) + 1)
    }
    
    // map.size만큼이 사실 최대야...! => 종류...!
    
    return canGet >= map.size ? map.size : canGet
}

// 8마리 중 4마리 (절반 가져갈 수 있음)
// 무조건 짝수개의 포켓몬이 있음! 

// [3, 1, 2, 3] 
// 1 => 1
// 2 => 1
// 3 => 2 