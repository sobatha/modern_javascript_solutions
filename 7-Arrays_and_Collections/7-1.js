const MakeArrayFrom = function(arrayLike) {
    if (!arrayLike) return ;
    array = []
    for (let i = 0; i < arrayLike.length; i++){ // lengthプロパティ以上の数値を持っていても切り捨てられる
        array[i] = arrayLike[i]?? undefined // 数字でないプロパティについては、undefinedになる
    }
    return array
}
