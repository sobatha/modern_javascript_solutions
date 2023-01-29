let x = a
// 違反トークンが文頭に来る場合においては;が自動的に挿入されない。
// (, [, `, +, -, / (正規表現リテラル) が違反トークン
// () []  は実際のプログラムでもありそうなので、注意が必要。
// 参照　https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Lexical_grammar#%E8%87%AA%E5%8B%95%E3%82%BB%E3%83%9F%E3%82%B3%E3%83%AD%E3%83%B3%E6%8C%BF%E5%85%A5

