def move_zeros(array):
    arr = []
    zeroCounter = 0

    for x in array:
        if x != 0:
            arr.append(x)
        else:
            zeroCounter +=1

    for i in range(zeroCounter):
        arr.append(0)
    return arr

print(move_zeros([1, 0, 1, 2, 0, 1, 3]))