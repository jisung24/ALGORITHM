function solution(d, budget) {
    d = d.sort((a, b) => {
        if(a > b) return 1;
        else if(a < b) return -1
    })
    
    for(let i = 0; i < d.length; i++) {
        if(budget - d[i] > 0) budget -= d[i]
        else if(budget - d[i] === 0) return i + 1
        else return i
    } 
    // 그래도... 남는다면? 
    return d.length
    

}


// [1, 2, 3, 4, 5] 9
// 하나씩 빼기 전... 뺐을 때 
// 음수가 된다면? => 그 앞에까지! 
// 0이 된다면? => 그 수까지 
// 양수라면 그냥 계속 진행 