def solution(strlist):
    # 한 번에 변화시켜줄 수 있는 map같은 거 없나...! 
#     answer = []
#     for i in strlist:
#         answer.append(len(i))
        
#     return answer 
    return [len(i) for i in strlist] # 와... 변화시켜줄 대상을 적어주면 끝!! 