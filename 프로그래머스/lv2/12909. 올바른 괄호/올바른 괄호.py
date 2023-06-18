def solution(s):
    # 마지막에 온 열린 괄호가 먼저 닫혀야한다! 
    # 대신 )는 무조건 stack에 열린 괄호가 있어야 돼! 
    stack = []
    for i in s: # for-of 같은 문법! 
        if i == '(':
            stack.append(i)
        else: # 만약 닫는 괄호가 왔다면! 
            if len(stack) == 0: # 만약 stack이 비어있다면! 
                return False
            else:
                stack.pop() # 내보내줘...! 
                
    return len(stack) == 0
                
            
        