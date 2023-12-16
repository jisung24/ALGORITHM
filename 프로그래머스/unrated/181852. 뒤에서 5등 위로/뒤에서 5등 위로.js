function solution(num_list) {
    // 가장 작은 5개의 수를 제외한 모든 수.... 
    return num_list.sort((a, b) => {
        if(a > b) return -1
        if(a < b) return 1
    }).slice(0, -5).reverse()
}

// 즉, 큰 거만 5개 골라서,,, 다시 오름차순으로! 
// reverse