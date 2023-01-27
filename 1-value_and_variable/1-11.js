harry = {}
sally = {}
harry.friends = ['Tom', 'Jenny']
sally.friends = ['Mike', 'Lucy']
sally.friends.push(harry)
harry.friends.push(sally)
sally //{friends: Array(3)} friends: Array(3) 0: "Mike" 1: "Lucy" 2: friends: Array(3)0:"Tom" 1: "Jenny" 2: friends: 0:"Mike"...
Array(3)
JSON.stringify(sally)
// Uncaught TypeError: Converting circular structure to JSON
//     --> starting at object with constructor 'Object'
//     |     property 'friends' -> object with constructor 'Array'
//     |     index 2 -> object with constructor 'Object'
//     |     property 'friends' -> object with constructor 'Array'
//     --- index 2 closes the circle
//     at JSON.stringify (<anonymous>)
//     at <anonymous>:1:6