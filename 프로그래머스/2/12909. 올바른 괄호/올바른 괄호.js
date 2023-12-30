// 짝지어진다? => 짝 확인하는 문제 
// stack
// => 짝이면, 넣고, 다른 건 빼고... 
// stack이 0인걸 확인하면 되는데, 
// 뺄 때, 사실 stack이 비어있으면 안 됨 
// => 스택이 비어있어도 pop하면 길이 0인데 
// 그럼 넣기 2 빼기 5여도 같다고 나오기 때문임
function solution(s) {
  const stack = []
  for(let i = 0; i < s.length; i++) {
      if(s[i] === '(') stack.push(s[i])
      else {
          if(stack.length === 0) return false
          else stack.pop()
      }
  }
    
    return stack.length === 0
}