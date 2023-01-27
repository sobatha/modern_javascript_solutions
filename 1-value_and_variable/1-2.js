[] + [] //''
a = [] + [] //''

{} + [] //0
b = {} + [] // '[object Object]'

[] + {} //'[object Object]'
c = [] + {} //'[object Object]'

{} + {} //'[object Object][object Object]'
f =  {} + {} //'[object Object][object Object]'

[] - {} //NaN
// {}は空のオブジェクトとして評価される 
g = [] - {}
//NaN