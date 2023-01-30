const printAllChar = (...str) => {
    str.forEach((c) => console.log(c))
}
printAllChar('Hello') //Hello
//　これを利用することで複数の単語による文章を管理しやすくなる