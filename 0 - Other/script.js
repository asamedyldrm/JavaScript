





// var array = ["Java", "Python", "C++", "c"]
// array[4] = "Php"
// console.log(array)
// console.log(array.length)

// array.push("Go")
// console.log(array)

// console.log(array.length)

// for (var i=0; i<10; i++){
//     console.log("i değeri: " + i)
// }

// var i = 0;

// while (i<50){
//     console.log(i)
//     i +=2;
// }

// var sayilar = [32, 5, 100, -1, 85]

// console.log("Array Elemanları: ")

// for (var i = 0; i<sayilar.length; i++){
//     console.log("Eleman:" + sayilar[i])
// }

//Pratik Yöntemi
// sayilar.forEach(function(sayi){
//     console.log("Eleman: " + sayi)
// })


// var a = 5
// var b = 6

// console.log(a==b)

// if (a != b){
//     console.log("Eşit Değil")
// }

// if (10 < 20){
//     console.log("Küçüktür.")
// }

// if (2 === "2") {
//     console.log("Eşit")
// }

// if (2 == "2") {
//     console.log("Eşit")
// }

// if (2 == 2 && "Samet" == "Samet") {
//     console.log("Ve operatörü")
// }

// if (2 == 2 || "Murat" == "Osman") {
//     console.log("Or operatörü")
// }

// if (! (5<4)){
//     console.log("Not Operatörü")
// }

// var a = 10;
// var b = 20;

// //if and else

// if (a==b){
//     console.log("Eşit")
// }

// else {
//     console.log("Eşit Değil.")
// }

// var islem = 4;

// if (islem ==1){
//     console.log("İşlem 1")
// }

// else if(islem==2){
//     console.log("İŞlem 2")
// }

// else if(islem==3){
//     console.log("İşlem 3")
// }

// else {
//     console.log("Geçersiz işlem.")


//if and else - end

//switch

// var islem = 4;

// switch(islem) {

//     case 1:
//         console.log("İşlem 1");
//         break;
//     case 2:
//         console.log("İşlem 2")
//         break;
//     case 3:
//         console.log("İşlem 3")
//         break;
//     default:
//         console.log("Geçersiz işlem! /Switch - Case")
//     }


// function selamla(){
//     console.log("Hello World!")
// }

// selamla();

// function topla(x, y){
//     console.log("Sayıların Toplamı: " + (x + y))
//     console.log(`Sayıların toplamı: ${x+y}`)
//     return x + y;
// }

// console.log("Return ile " + topla(4,5))

// var toplam = topla(9,8)

// console.log(toplam)

//OBJECT 

// var calisan = {
//     isim: "Samet",
//     soyisim: "YILDIRIM",
//     numara: 12345,
//     diller: ["Python", "CSS", "Javascript"],
//     adres: {
//         semt : "Emek",
//         sokak : "Mavi"
//     },
//     isimBilgileri : function(){
//         return "Çalışan: " + this.isim + " " +  this.soyisim
//     }
// };
// console.log(calisan.isim)
// console.log(calisan.soyisim)
// console.log(calisan.numara)
// console.log(calisan.diller)
// console.log(calisan.adres.semt)

// console.log(calisan.isimBilgileri())


// var calisan = new Object();

// calisan.isim = "Samet YILDIRIM";
// calisan.numara = 12345;
// calisan.isimBilgileri = function(){
// return "İsim - Numara: " + this.isim + " " + this.numara;
// };

// console.log(calisan.isim)
// console.log(calisan.isimBilgileri())

// function Calisan(isim, soyisim, numara){
//     this.isim = isim;
//     this.soyisim = soyisim;
//     this.numara = numara;
//     this.bilgileriGoster = function(){
//         return "İsim: " + this.isim + "\nSoyisim : " + this.soyisim + "\nNumara : " + this.numara
//     }
// }

// var calisan1 = new Calisan("Samet", "YILDIRIM", "987654")
// var calisan2 = new Calisan("Baki", "KARA", "11111")

// console.log(calisan1.isim, calisan1.soyisim, calisan1.numara)

// console.log(calisan1.bilgileriGoster())
// console.log(calisan2.bilgileriGoster())


// function tikla(element){
//     element.innerHTML = "Butona Tıklandı"
// }

// function renkDegistir(){
//     // var element = document.getElementById("parag1");
//     // element.style.color= "red";
//     document.getElementById("parag1").style.color = "red"
// }

// function mouseover(){
//     var element = document.getElementById("parag1");
//     element.innerHTML = "Mouse Over Effect"

// }

// function mouseout(){
//     var element = document.getElementById("parag1");
//     element.innerHTML = "Mouse Out Effect"

// }



// function dogrula(){

//     var form = document.forms["form1"];
//     var deger = form["isim"].value;

//     if (deger == ""){
//         alert("İsim alanı boş bırakılamaz.");
//         return false;
//     }

//     return true;
// }

//let adSoyad = "Samet YILDIRIM"

// let bastanSona = adSoyad.slice(6,10);
// console.log(bastanSona)

//5'ten başlayıp 4 adım gider.
// let bastanSonaSubstr = adSoyad.substr(6,4);
// console.log(bastanSonaSubstr)

// let yerDegistir = adSoyad.replace("RIM", "M")
// console.log(yerDegistir)

//Daire Alan

// let yaricap = 15;
// const pi = Math.PI

// let daireAlan = pi*yaricap**2
// console.log(daireAlan)

// //Math

// console.log(16/4) //bölme
// console.log(16%3) //bölümünden kalan

// let sonuc = 6 * (15-4)**2;
// console.log(sonuc)

// let sayi = 13;
// sayi += 1
// sayi++;
// console.log(sayi)

// //

// let isimler = ["Ali", "Ahmet", "Tuçe"]

// console.log(isimler.join(", "))

// console.log(isimler.indexOf("Tuçe"))
// let elemanekle = isimler.push("Leyla")

// console.log(isimler)

// let pop = isimler.pop()
// console.log(isimler)
// console.log(pop) //diğer listeden alır ve istersek bir değişkene atabiliriz.

// // Null ve Undifined

// let yass;

// console.log(yass, yass+5, `Yaş: ${yass}`)

// //

// let yas = null;

// console.log(yas, yas+5, `Yaş: ${yas}`)

// //

// //True - False

// let email = "smtyldrm32@gmail.com";
// console.log(email.includes("@"));
// console.log(email.includes("sam"));

// let adSoyad = ["Samet", "Baki", "Kazım", "Leyla"]
// console.log(adSoyad.includes("Samet"))


// yasim = "25"
// console.log(yasim+1)
// console.log(typeof yasim)

// yasim = Number(yasim)
// console.log(yasim+1)
// console.log(typeof yasim)


// console.log(Boolean(0)) //false
// console.log(Boolean("0")) //true
// console.log(Boolean("samet")) //true
// console.log(Boolean()) //false

//for

// for(let i=0; i<10; i++)
// {
//     console.log(i)
// }

// console.log("Döngü bitti.")

const adSoyad = ["samet", "baki", "kazım"]

// for (let i = 0; i < adSoyad.length; i++) {
//     let html = `<div>${adSoyad[i]}</div>`
//     console.log(html)
// }

//while

// let i = 0

// while (i < 10) {
//     console.log(i)
//     i++;
// }

// while (i < adSoyad.length) {
//     console.log(adSoyad[i])
//     i++;

// }

// i=6;

// while (i>3){
//     console.log(i)
//     i--;
// }

// Do While

//do'nun içindeki komutu kesin çalıştırır,
//ifade doğru ise do'nun içine tekrar girer.

let i = 3;

do{
    console.log(i);
    i++;
} while(i<5);



