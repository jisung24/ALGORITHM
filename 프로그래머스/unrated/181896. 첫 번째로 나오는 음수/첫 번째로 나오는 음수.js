function solution(num_list) {
    let minusNumIndex = -1
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] < 0) {
            minusNumIndex = i
            return minusNumIndex
        }
    }
    return minusNumIndex
}