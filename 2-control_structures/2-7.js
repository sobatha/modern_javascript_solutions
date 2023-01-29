let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
for (i in arr) {
    if (i + 1 === 10) {
        console.log(arr[i]) //aはおそらく問題文のミス
}}
//これが動かないのはfor inなので、objectのkeyを返しているので、stringの0-11が返る
//inをofにするか
for (i of arr) {
    if (i + 1 === 10) {
        console.log(i)
}} //9
//arr[i]でアクセスするようにすれば動く
for (i in arr) {
    if (arr[i] + 1 === 10) {
        console.log(arr[i])
}}