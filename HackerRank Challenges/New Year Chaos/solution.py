def minimumBribes(q):
    chaotic = False
    bribes = 0

    for i, num in enumerate(q):
        if (num - (i + 1)) > 2:
            chaotic = True
        for j in range(q[i] - 2, i):
            if q[j] > num:
                bribes += 1

    if chaotic == True:
        print("Too chaotic")
    else:
        print(bribes)