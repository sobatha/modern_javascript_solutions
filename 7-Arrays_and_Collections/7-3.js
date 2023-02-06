a[1] = 2 
a[0] = 1  
a[-1] = 3
a // [1, 2, -1: 3]
a.length // 2 負の整数のプロパティは長さに影響を与えない
for (i of a) console.log(i) // 1, 2
for (i in a) console.log(a[i]) // 1, 2, 3