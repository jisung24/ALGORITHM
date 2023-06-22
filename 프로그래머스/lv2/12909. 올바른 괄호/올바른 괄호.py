# 비교될 수 있는 게 1대1이니까 선형 자료구조! 
# 그래프, 트리는 절대 아님 


def solution(s):
    stack = []
    
    for i in s:
        if i == '(':
            stack.append(i)
        else: # ')'가 온 경우!
            if len(stack) == 0: # 스택이 비어있는 경우...! 
                return False
            else: # 스택이 비어있지 않은경우! 
                stack.pop() # 빼준다. 
    return len(stack) == 0
            
        