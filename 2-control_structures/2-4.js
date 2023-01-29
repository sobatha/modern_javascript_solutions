undefined < 0; //false undefinedは自分自身とnull以外では等価でない
undefined <= 0; //false
undefined == 0; //false
undefined < ''; //false
undefined <= ''; //false
undefined == ''; //false
undefined < null; //false
undefined <= null; //false
undefined == null; //true undefinedとnullは互いに等価
0 < ''; //false ''は0という数値に変換される
0 <= ''; //true ''は0という数値に変換され
0 == ''; //true ''は0という数値に変換される
0 < null; //false  nullは0という数値に変換される
0 <= null; //true　nullは0という数値に数値に変換される
0 == null; //false nullは==演算子によってundefinedに変換される 
'' < null; //false nullと''はは0という数値に変換される
'' <= null; //true nullと''はは0という数値に変換される
'' == null; //false nullは==演算子によってundefinedに変換される 
+null //0

//参考　https://stackoverflow.com/questions/2910495/why-null-0-null-0-but-not-null-0
