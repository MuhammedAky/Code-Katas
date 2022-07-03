# def get_sum(a,b):
#     total = 0
#     if (a==None) or (b==None):
#         return -1
#     elif a == b:
#         return a
#     else:
#         minNum = min(a,b)
#         maxNum = max(a,b)
#         for i in range(minNum,maxNum+1):
#             print(i)
#             total += i
#     return total

def get_sum(a,b):
    minNum = min(a,b)
    maxNum = max(a,b)
    return (maxNum - minNum +1) * (minNum + maxNum) / 2




print(get_sum(7, 2))