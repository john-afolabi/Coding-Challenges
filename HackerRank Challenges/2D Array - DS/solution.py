def hourglassSum(arr):
    maxNum = None
    for i in range(1, len(arr) - 1):
        for j in range(1, len(arr) - 1):
            num = arr[i][j] + arr[i - 1][j] + arr[i - 1][j - 1] + arr[i - 1][
                j + 1] + arr[i + 1][j] + arr[i + 1][j - 1] + arr[i + 1][j + 1]
            if maxNum == None:
                maxNum = num
            elif num > maxNum:
                maxNum = num
    return maxNum