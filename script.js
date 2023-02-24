





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



function dogrula(){
    
    var form = document.forms["form1"];
    var deger = form["isim"].value;

    if (deger == ""){
        alert("İsim alanı boş bırakılamaz.");
        return false;
    }

    return true;
}