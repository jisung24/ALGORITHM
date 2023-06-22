# 1대 다인지, 그냥 1대 1인지! => 선형 비선형 자료구조 
def solution(arr):
    stack = [arr[0]]
    
    for i in range(1, len(arr)):
        if arr[i] != stack[-1]:
            # 만약 arr의 원소가 stack마지막 원소와 다르다면 
            stack.append(arr[i])
            
    return stack