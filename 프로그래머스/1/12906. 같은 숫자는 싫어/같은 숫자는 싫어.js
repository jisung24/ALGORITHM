// stack: 넣었다 뺐다! 
// 첫 번째 숫자는 그냥 넣고, index[1]부터 반복문 돌려서... 
// 넣은 배열의 맨 뒤 숫자와 다르면 push하는걸로! 
function solution(arr) {
    const answer = [arr[0]]
    for(let i = 1; i < arr.length; i++) {
        if(answer[answer.length - 1] !== arr[i]) answer.push(arr[i])
    }
    
    return answer
}