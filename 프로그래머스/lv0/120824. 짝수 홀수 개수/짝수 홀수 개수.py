def solution(num_list):
    # javascript reduce같은 문법! 
    evenCnt = 0 # 짝수 개수
    oddCnt = 0
    for i in num_list:
        if i % 2 == 0:
            evenCnt += 1
        else:
            oddCnt += 1
    
    return [evenCnt, oddCnt]