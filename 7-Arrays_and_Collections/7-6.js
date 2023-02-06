let messages = [
    { date: 20221031, sender: 'Tom'},
    { date: 20221101, sender: 'Harry'},
    { date: 20220101, sender: 'Harry'},
    { date: 20220221, sender: 'Sarry'},
    { date: 20221221, sender: 'Sarry'},
]

messages.sort((x, y) => x.date - y.date)
messages.sort(function (a, b) {
    if (a.sender < b.sender) {
      return -1;
    }
    if (a.sender > b.sender) {
      return 1;
    }
    return 0;
  })
// 0: {date: 20220101, sender: 'Harry'} 日付の順列を保ったまま、名前順に並び替えている
// 1: {date: 20221101, sender: 'Harry'}
// 2: {date: 20220221, sender: 'Sarry'}
// 3: {date: 20221221, sender: 'Sarry'}
// 4: {date: 20221031, sender: 'Tom'}