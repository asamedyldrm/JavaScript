JavaScript Cheat Sheet
Değişkenler
Değişkenler, JavaScript'te değerleri saklamak için kullanılır. JavaScript'te üç farklı değişken tanımlama yöntemi vardır:

var: Global bir değişken tanımlamak için kullanılır. Değişkenin kapsamı, en yakın fonksiyon veya global kapsam olarak belirlenir.
let: Blok kapsamında değişken tanımlamak için kullanılır. Değişkenin kapsamı, en yakın blok (örneğin, {} arasındaki blok) olarak belirlenir.
const: Değiştirilemeyen (sabit) bir değişken tanımlamak için kullanılır. Bir kez atandıktan sonra değeri değiştirilemez.

<code>
var globalVariable = "Bu bir global değişkendir.";
let blockVariable = "Bu bir blok değişkenidir.";
const immutableVariable = "Bu değiştirilemeyen bir sabittir.";
</code>
