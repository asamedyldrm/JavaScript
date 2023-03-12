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

Döngüler
Döngüler, belirli bir koşul doğru olduğu sürece kodun belirli bir bölümünü tekrar tekrar çalıştırmak için kullanılır. JavaScript'te üç farklı döngü yöntemi vardır:

for: Belirli bir koşula göre döngü yapmak için kullanılır. Genellikle belirli bir aralıkta veya belirli bir dizi elemanında döngü yapmak için kullanılır.
while: Bir koşul doğru olduğu sürece döngü yapmak için kullanılır. Koşul döngü başlamadan önce kontrol edilir ve doğruysa döngüye girilir.
do...while: Bir koşul doğru olduğu sürece döngü yapmak için kullanılır. Koşul döngü bitmeden önce kontrol edilir ve doğruysa döngüye girilir.
Örnekler:

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

let k = 0;
do {
  console.log(k);
  k++;
} while (k < 10);


Koşullu İfadeler
Koşullu ifadeler, belirli bir koşulun doğru veya yanlış olduğunu değerlendirmek için kullanılır. JavaScript'te iki farklı koşullu ifade yöntemi vardır:

if...else: Belirli bir koşula göre ifadeyi değerlendirmek için kullanılır. Eğer koşul doğruysa, if bloğu çalıştırılır, aksi takdirde else bloğu çalıştırılır.

switch bloğu, belirli bir değer için farklı durumların tanımlandığı bir yapıdır. Her durum, belirli bir değere sahip olduğunda çalıştırılacak kod bloğunu içerir.

let x = 5;
if (x > 0) {
  console.log("x, 0'dan büyüktür.");
} else if (x < 0) {
  console.log("x, 0'dan küçüktür.");
} else {
  console.log("x, 0'dır.");
}

let y = 3;
switch (y) {
  case 1:
    console.log("y, 1'e eşittir.");
    break;
  case 2:
    console.log("y, 2'ye eşittir.");
    break;
  case 3:
    console.log("y, 3'e eşittir.");
    break;
  default:
    console.log("y, tanımlı değildir.");
}


Fonksiyonlar
Fonksiyonlar, belirli bir işlevi yerine getirmek için kullanılır. JavaScript'te iki farklı fonksiyon tanımlama yöntemi vardır:

function: Fonksiyon tanımlamak için kullanılır. Fonksiyon, adı ve gerekli parametreleri içerir.
Arrow Function (=>): Kısa fonksiyon tanımlamak için kullanılır. Fonksiyon, gerekli parametreleri ve işlevi içerir.

function square(x) {
  return x * x;
}

const cube = (x) => {
  return x * x * x;
};


Diziler
Diziler, birçok değeri tek bir değişkende saklamak için kullanılır. Her bir değer, dizi içinde bir indeks numarasıyla tanımlanır.

Örnekler:

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[2]);

let strings = ["Merhaba", "Dünya"];
console.log(strings[1]);


Nesneler
Nesneler, birden çok değeri birleştirerek bir veri yapısı oluşturmak için kullanılır. Her bir değer, nesne içinde bir anahtar kelimeyle tanımlanır.

Örnekler:

let person = {
  firstName: "Ahmet",
  lastName: "Yılmaz",
  age: 30,
  city: "Ankara"
};

console.log(person.age);
console.log(person["city"]);

For Döngüsü
for döngüsü, belirli bir işlemi belirli bir sayıda kez tekrarlamak için kullanılır. Döngü, bir başlangıç değeri, bir bitiş koşulu ve bir artış değeri içerir.

Örnekler:

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let cars = ["BMW", "Mercedes", "Audi", "Ford"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

