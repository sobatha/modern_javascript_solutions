const mkString = (array, {
    separator = ',',
    leftDelimiter = '[',
    rightDelimiter = ']'
} = {}) => {
    let string = leftDelimiter
    for (i of array) {
        string = string + i + separator
    }
    string = string + rightDelimiter
    return string
}

result = mkString(['hello', 'world'])
console.log(typeof(result))