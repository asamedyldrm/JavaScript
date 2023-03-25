
// const dersler = [
//     {isim: 'matematik', puan:90},
//     {isim: 'fizik', puan:88},
//     {isim: 'kimya', puan:20},

// ]


// obje oluşturma
// let ogrenci = {
//     ad: 'samet',
//     soyad: 'yıldırım',
//     yas: 26,
//     email: 'smtyldrm32@gmail.com',
//     sinif: 12,
//     dersler: [
//         {isim: 'matematik', puan:90},
//         {isim: 'fizik', puan:88},
//         {isim: 'kimya', puan:20},
//     ],
//     // objeye metod ekleme
//     login: function () {
//         console.log("Öğrenci giriş yaptı");
//     },
//     logout() { //bu şekilde de yazabiliriz. fakat arrow function kullanılamaz.
//         console.log("Öğrenci çıkış yaptı")
//     },
//     printLessons() {
//         this.dersler.forEach(x => {
//             console.log(x.isim, x.puan);
//         })

//     }

// };

// console.log(this)
// ogrenci.login();
// ogrenci.logout();
// ogrenci.printLessons();


// console.log(ogrenci);
// console.log(ogrenci.dersler);
// console.log(ogrenci.yas);


// ogrenci.yas = 20;

// console.log(ogrenci.yas)

// console.log(ogrenci)

// console.log(ogrenci['ad'], ogrenci['dersler'])

// ogrenci['ad'] = "baki"

// console.log(ogrenci['ad'])
// console.log(ogrenci.ad);

// console.log(typeof(ogrenci));


/// MATH OBJECT ///

console.log(Math);
// pi sayısını verir
console.log(Math.PI);

let sayi = 5.9;

console.log(Math.round(sayi)); // en yakın tam sayıya yuvarlar
console.log(Math.floor(sayi)); // aşağı yuvarlar
console.log(Math.ceil(sayi)); // yukarı yuvarlar
console.log(Math.trunc(sayi)); // decimal kısmı siler.

console.log(Math.random());

console.log(Math.round(Math.random()*1000));
