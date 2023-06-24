def solution(n):
    # n이하면 N도 포함! 
    return sum([i for i in range(2, n + 1) if i % 2 == 0])