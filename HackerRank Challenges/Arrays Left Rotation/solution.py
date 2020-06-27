def rotLeft(a, d):
    arr = a.copy()
    while d > 0:
        num = arr.pop(0)
        arr.append(num)
        d -= 1
    return arr