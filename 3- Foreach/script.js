

// const a = (callBacka) => {
//     let yas = 40;
//     callBacka(yas);
// };
// a(function(value){
//     console.log(value);
// })

let ogrencilerim = ["samet", "baki", "kazım", "ebru"];

ogrencilerim.forEach(function () {
    console.log("Selam")
})


ogrencilerim.forEach(function (kisi, index) {
    console.log(kisi, index)
})

const ogrenci = (kisi, index) => {
    console.log(`${index + 1} - ${kisi} `)
}

ogrencilerim.forEach(ogrenci);

cars = ["BMW", "Mercedes", "Tofaş"]

for (let i in cars) {
    // console.log(cars[i])
    console.log(`index: ${i} - value: ${cars[i]}`)
}


let sayilar = ["1A", "2A" , "3A", "4A", "5B"]

sayilar.forEach(function(sayi, index){
    console.log("İndex: " + sayi, index+1)
})