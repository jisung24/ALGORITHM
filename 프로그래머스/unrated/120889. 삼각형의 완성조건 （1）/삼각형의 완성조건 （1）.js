function solution(sides) {
    const sort = sides.sort((a, b) => {
        if(a > b) return -1;
        if(a < b) return 1;
    })
    console.log(sort);
    // 0번째가 제일 큼! 
    if(sort[0] < sort[1] + sort[2]) return 1;
    else return 2;
}