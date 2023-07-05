# 1. 시간복잡도 
# - n : 100만 (n^2)으로 풀면 안 됨. 
# - 👉 웬만하면 n으로 끝내보자. 
# - NlogN 정렬까지 가능함.

# 2. 어떤 자료구조와 알고리즘을 사용할것인가? 
# - 연속적으로 나오는 숫자는 1개만 남기는거야. 
# - 1ok 2번째 1은 1번째 1과 같으니까 x 
# 3도 1이랑 비교, 다르니까 ok 
# 3 => 3이랑 비교 안됨 
# 즉, 컴퓨터는 stack의 끝에것만 보여! => 탐색을 해봐야 알 수 있는거야.
# 즉, 끝에 값만 보고 로직을 짜야 그게 stack이야
def solution(arr):
    stack = []
    for i in arr:
        if len(stack) == 0:
            stack.append(i)
        else:
            if(stack[-1] != i):
                stack.append(i)
            # 같다면 그냥 무시...
            
    return stack