// değiskenler

// const { Date } = require("msnodesqlv8");

// var a = 6000;
// var b = 2000;
// var c = 3000;
// var kdv = 1.3;

// console.log(a * kdv);

// var a = 6000;
// console.log(a * kdv);
// console.log(b * kdv);
// console.log(c * kdv);

// Değişken Türleri
// var sinavnotu = 40;
// var basarilimi = (sinavnotu >= 50); //boolean => true, false

// console.log(basarilimi);
// console.log(typeof basarilimi);

// var isim = "ada" + " " + "bilgi";
// var dogumtarihi = 2012;
// var matematiknotu = 70 + " " + 70 + " " + 80;

// var durum = (matematiknotu >= 50);
// console.log(durum);

//strings
// var ad = "Emir";
// var soyad = "Coban";
// durum = "Benim Adım " + ad + " ve soyadım " + soyad;
// console.log(durum);
// var durum2 = `bu sadece bir deneme ${ad}`;
// console.log(durum2);

// var durum3 = "deneme";
// durum3sonuc = (durum3[0]);
// console.log(durum3sonuc);

//string uygulamaları

// let url = "https://www.sadikturan.com";
// let kursadi = "Komple Web Geliştirme Kursu";

// cevap_1 = url.length;
// console.log(cevap_1);

// console.log(kursadi.trim().split(" ").length);
// console.log(kursadi.indexOf("Eğitimi"));

// console.log(
//   url.toLocaleLowerCase() + "/" + kursadi.toLocaleLowerCase().replace(/ /g, "-")
// );
// console.log(url.startsWith("https"));

// let sonuc;

// sonuc = 10.8888;

// console.log(typeof sonuc);
// console.log(parseInt(sonuc));

// sonuc = Math.max(10, 20, 30); // 10, 20, 30 sayılarından en büyüğünü alır

// sonuc = Math.floor(Math.random()); // 0 ile 1 arasında rastgele sayı üretir
// console.log(sonuc);

//Diziler

// let telefonlar = ["samsung", "iphone", "xiaomi", "nokia", "huawei"];
// let fiyatlar = [1000, 2000, 3000, 4000, 5000];
// let renkler = ["kırmızı", "mavi", "siyah", "beyaz", "yeşil"];

// let sonuc = `${telefonlar[1]} - ${fiyatlar[1]} - ${renkler[1]}`;
// console.log(sonuc);

// let telefon = ["İphone", 5000, ["black", "white", "red"]];
// console.log(`${telefon[0]} - ${telefon[1]} - ${telefon[2][0]}`);
// console.log(`${telefon[0]} - ${telefon[1]} - ${telefon[2]}`);

//Dizi Metotları

// let isimler = ["Ali", "Veli", "Ayşe", "Fatma", "Zeynep"];

// sonuc = isimler.toString();

//eleman silme
// sonuc = isimler.shift();
// console.log(sonuc);

//eleman ekleme

// sonuc = isimler.unshift("Emir");
// sonuc = isimler.push("Emir");

//eleman arama
// sonuc = isimler.indexOf("Ali");
// sonuc = isimler.lastIndexOf("lale");
// sonuc =  isimler.includes("Ali"); // true false döner

//silme, ekleme

// sonuc = isimler.splice(4);

// console.log(sonuc);
// console.log(isimler);

//Diziler Uyuglama

//dizinin elemanları bilgilerini saklama yaş ve ortalama hesaplama
// ogr1_ad = ["Yigit"];
// ogr1_soyad = ["Bilgi"];
// ogr1_yas = 2010;
// ogr1_not = [60, 90, 80];

// ogr2_ad = ["Ada"];
// ogr2_soyad = ["Bilgi"];
// ogr2_yas = 2012;
// ogr2_not = [70, 80, 90];

// ogr3_ad = ["Çınar"];
// ogr3_soyad = ["Turan"];
// ogr3_yas = 2017;
// ogr3_not = [60, 50, 80];

// let not_ortalaması = (ogr1_not[0] + ogr1_not[1] + ogr1_not[2]) / 3;
// let yas_ortalaması = 2025 - ogr1_yas;
// sonuc = `Öğrenci Adı: ${ogr1_ad} - Öğrenci Soyadı: ${ogr1_soyad} - Öğrenci Yaşı: ${yas_ortalaması} - Not Ortalaması: ${not_ortalaması}`;
// console.log(sonuc);

// let meyve = ["Kiraz", "Karpuz", "Kavun", "Erik"];

//dizinin elemanı son 2 elemanını silme
// sonuc = meyve.splice(2,3)
// console.log(sonuc);
// console.log(meyve);

//elemana çilek ekleme
// sonuc = meyve.push("Çilek");
// console.log(sonuc);

//kavun bir dizinin elemanı mıdır?
// sonuc = meyve.includes("Karpuz");
// console.log(sonuc);

//dizinin ilk ve son elemanları yazdırma.

// sonuc = `Dizinin ilk elemanı: ${meyve[0]} - Dizinin son elemanı: ${meyve[3]}`;
// console.log(sonuc);

//dizi kaç elemanlıdır?
//  sonuc = meyve.length;
//  console.log(sonuc);

//Nesneler (Objects)

// let kullanici = {
//   ad: "Emir",
//   soyad: "Coban",
//   yas: 2023 - 2000,
//   telefon: "0555 555 55 55",
//   adres: ["Adana", "Mersin", "Adıyaman"],
//   email: "emircobanoffical@gmail.com",
//   sosyalmedya: {
//     instagram: "emir_coban",
//     facebook: "emir_coban",
//     tiktok: "emir_coban",
//   },
//   hobiler: {
//     hobi1: "Yüzme",
//     hobi2: "Koşu",
//     hobi3: "Yürüyüş",
//   },
// };

// console.log(kullanici.hobiler.hobi1);

// Uygulama: Nesneler (Objects)

// let siparis_1 = {
//   id: 101,
//   müsteri_id: 12,
//   tarih: "31.12.2025",
//   odeme_sekli: "Kredi Kartı",
//   kargo_adresi: {
//     mahalle: "Kurtuluş",
//     ilçe: "Seyhan",
//     sehir: "Adana",
//   },
//   ürünler: [
//     {
//       urun_id: 5,
//       urun_adi: "Iphone 16 Pro",
//       urun_url: "https://www.abc.com/iphone-16-pro",
//       fiyat: 75000,
//     },
//     {
//       urun_id: 6,
//       urun_adi: "Iphone 16 Pro Max",
//       urun_url: "https://www.abc.com/iphone-16-pro",
//       fiyat: 85000,
//     },
//   ],
// };

// let siparis_2 = {
//   id: 102,
//   müsteri_id: 12,
//   tarih: "31.11.2025",
//   odeme_sekli: "Kredi Kartı",
//   kargo_adresi: {
//     mahalle: "Kurtuluş",
//     ilçe: "Seyhan",
//     sehir: "Adana",
//   },
//   ürünler: [
//     {
//       urun_id: 6,
//       urun_adi: "Iphone 16 Pro Max",
//       urun_url: "https://www.abc.com/iphone-16-pro-max",
//       fiyat: 85000,
//     },
//   ],
// };

// let siparis1_Toplam = (siparis_1.ürünler[0].fiyat + siparis_1.ürünler[1].fiyat) * 1.20;
// let siparis2_Toplam = (siparis_2.ürünler[0].fiyat) * 1.20;
// console.log(siparis1_Toplam);
// console.log(siparis2_Toplam);

// let toplam_siparis = siparis1_Toplam + siparis2_Toplam;
// console.log("Toplam Siparis: " + toplam_siparis);

// let siparisler = [siparis_1, siparis_2];

//Operatörler
// let sonuc;
// let a = 10,
//   b = 20,
//   c = 30;
// 1- Aritmetik Operatörler
// sonuc = a + b;
// sonuc = a - b;
// sonuc = a / b;
// sonuc = a * b;
// sonuc = a % b;
// sonuc = a++; // sonuc = a + 1
// sonuc = ++a; // sonuc = a + 1
// sonuc = --a; // sonuc = a - 1
// sonuc = a--; // sonuc = a - 1

// 2- Atama Operatörleri
// sonuc = a;
// sonuc += a + b; // sonuc = sonuc + (a + sonuc)
// sonuc += a; // sonuc = sonuc + a;
// sonuc -= a; // sonuc = sonuc - a;
// sonuc *= a; // sonuc = sonuc * a;
// sonuc /= a; // sonuc = sonuc / a;
// sonuc %= a; // sonuc = sonuc / a;

// 3- Karşılaştırma Operatörleri

// sonuc = a == b;
// sonuc = a == c;
// sonuc = a != b;
// sonuc = a > b;
// sonuc = a < b;
// sonuc = a <= b;

// 4- Mantıksal Operatörler

// console.log(sonuc);

//If/Else Koşul İfadeleri

// if(2025-2020 == 5)
// {
//     console.log("merhaba");
// }

// let username = "EmirCoban";
// let password = "123";

// if ((username == "EmirCoban", password == "13")) {
//   console.log("Giriş yapıldı");
// }
// else
// {
//   console.log("Giriş yapılmadı");
// }

// If else Koşul ifadeler

// let yas = 18
// let mezuniyet = "lise"

// if(yas>18 &&mezuniyet=="lise")
// {
//     console.log("Ehliyet alabilir")
// }
// else
// {
//     console.log("Ehliyet alamaz")
// }

// and &&
// true, true = true
// false, true = false
// false, false = false

// veya ||
// true, true = true
// false, true = true
// false, false = false

//if else uygulamaları

// let sayı = 52

// if(sayı>50 && sayı < 100)
// {
//     console.log("Sayı 50 ile 100 arasındadır")
// }
// else
//  {
//      console.log("Sayı 50 ile 100 arasında degil")
//  }

// let sayi = 10;

// if (sayi % 2 == 0 && sayi > 0) {
//   console.log("sayı pozitif çift sayıdır.");
// }

// let x = 20,
//   z = 40,
//   y = 25;

// if (x > z && x > y) {
//   console.log("en büyük x");
// }

// if (y > x && y > z) {
//   console.log("en büyük y");
// }

// if (z > x && z > y) {
//   console.log("en büyük z");
// }

// eğer ortalama 50 ve üstü üstündeyse geçti değilse kaldı yazsın.
// let sinav1 = 10,
//   sinav2 = 10,
//   final = 70;

//   let = ortalama = ((sinav1 + sinav2) / 2) * 0.40 + (final * 0.6)

//   if(ortalama > 50){
//     console.log("sinavı geçti")
//   }

//   else{
//     console.log("sınavdan kaldı")
//   }

// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır

// let = ortalama = ((sinav1 + sinav2) / 2) * 0.40 + (final * 0.6)

// if(ortalama >= 50 && final >= 50){
// console.log("sinavı geçti")
// }

// else{
// console.log("sınavdan kaldı")
// }

// c- Finalden 70 alındığında ortalama 50'nin altında olsa bile geçmiş sayılsın.

// let = ortalama = ((sinav1 + sinav2) / 2) * 0.40 + (final * 0.6)

// if(ortalama >= 50 || final >= 50){
// console.log("sinavı geçti")
// }

// else{
// console.log("sınavdan kaldı")
// }
// console.log(ortalama)

// For Döngüsü
// for(let i = 1; i<100; i++){
//     console.log(i)
// }

// let sayilar = [1, 2, 3, 5, 6, 8, 9, 0, 12, 45, 13, 25, 67];
// let toplam = 0;

// for (let index = 0; index < sayilar.length; index++) {
//   console.log(sayilar[index]);

//   toplam += sayilar[index];
// }

// console.log(toplam);

//While Döngüsü
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// let i = 1;
// while (i <= 10) {
//   i++;
//   if (i % 2 == 1) {
//     continue
//   }
//   console.log(i);
// }

// Uygulama: Döngüleri

// let sayilar = [3, 5, 7, 8, 12, 23, 45, 66];

// 1- Sayilar dizisindeki her bir sayının karesini yazdırınız.✅
// for (let i = 0; i < sayilar.length; i++) {
//   console.log(sayilar[i] * sayilar[i]);
// }
// 2- sayilar listesindeki hangi sayılar 5'in katıdır?
// for (let i = 0; i < sayilar.length; i++) {
//   if(sayilar[i] %5 ==0)
//   {
//     console.log(sayilar[i])
//   }
// }
// 3- 50-100 arasındaki sayıları azalan şekilde yazdırınız.✅

// for (i = 100; i >= 50; i--) {
//   console.log(i);
// }

// 4- urunler listesindeki tüm ürünleri büyük harfe çeviriniz.

// let urunler = ["iphone 16", "samsung s25", "iphone 17", "samsung s26"];
// for (let i = 0; i < urunler.length; i++)
//   console.log(urunler[i].toUpperCase());

// 5- urunler listesinde içinde samsung kelimesi geçen kaç kelime vardır?
// let adet = 0;

// for (let i = 0; i < urunler.length; i++) {
//   if (urunler[i].includes("samsung")) {
//     adet++;
//     console.log(urunler[i]);
//   }
// }
// console.log(adet + " tane kelime bulundu");

// 6- ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumu yazdırınız.

// let ogrenciler = [
//   { ad: "Yiğit", soyad: "Bilgi", notlar: [60, 70, 80] },
//   { ad: "Ada", soyad: "Bilgi", notlar: [80, 50, 75] },
//   { ad: "Çınar", soyad: "Turan", notlar: [70, 70, 80] },
// ];

// let toplam_sinif = 0;

// for (let i = 0; i < ogrenciler.length; i++) {
//   let not_toplam = 0;
//   let adet = 0;
//   let ortalama = 0;
//   let basari = "";

//   for (let x = 0; x < ogrenciler[i].notlar.length; x++) {
//     not_toplam += ogrenciler[i].notlar[x];
//     adet++;
//   }

//   ortalama = not_toplam / adet;

//   toplam_sinif += ortalama;

//   if (ortalama >= 50) {
//     basari = "Basarili";
//   } else {
//     basari = "Basarısız";
//   }

//   console.log(
//     `${basari}: ${ogrenciler[i].ad} ${ogrenciler[i].soyad} isimli öğrencinin not ortalaması ${ortalama}`
//   );
// }
// console.log("sınıf ortalaması " + toplam_sinif / ogrenciler.length);

// 7- Tüm öğrencilerin not ortalaması nedir?

//fonksiyonlar

// function selamlama(mesaj) {
//   console.log(mesaj);
// }

// selamlama("merhaba");
// selamlama("selam");

// function yasHesapla(dogumyili) {
//   let simdi = new Date().getFullYear();
//   return simdi - dogumyili;
// }

// console.log(yasHesapla(2028));
// console.log(yasHesapla(2000));

// function emekliligekacyilkaldi(dogumyili, isim) {
//   let yas = yasHesapla(dogumyili);

//   let kalan_sene = 65 - yas;

//   if (kalan_sene > 0) {
//     console.log(`${isim}, emekli olmanıza ${kalan_sene} yıl kaldı`);
//   } else {
//     console.log(`${isim}, zaten emekli oldunuz`);
//   }
// }

// emekliligekacyilkaldi(2028, "Emir");
// emekliligekacyilkaldi(2000, "Ahmet");

//Uygulama:fonksiyonlar

// function kelimeyazdır(kelime, kez) {
//   for (let i = 0; i < kez; i++) {
//     console.log(kelime);
//   }
// }

// kelimeyazdır("Merhaba", 4);

// function dikdörtgenhesapla(uzunluk, genislik) {
//   const alan = uzunluk * genislik;
//   const cevre = 2 * (uzunluk + genislik);

//   console.log("Dirkdörtgen Alanı: " + alan);
//   console.log("Dikdörtgenin Çevresi :" + cevre);
// }

// dikdörtgenhesapla(10, 5);

// function yazitura() {
//   const rastgelesayi = Math.random();

//   if (rastgelesayi < 0.5) {
//     console.log("Yazı");
//   } else {
//     console.log("Tura");
//   }
// }
// yazitura();

// function tamBolenler(sayi) {
//   const bolenler = [];

//   for (let i = 1; i <= sayi; i++) {
//     if (sayi % i === 0) {
//       bolenler.push(i);
//     }
//   }
//   return bolenler;
// }
// const sonuc = tamBolenler(100);
// console.log(sonuc);

// function kelimeyazdır(kelime, adet) {
//   for (let i = 0; i < adet; i++) {
//     console.log(kelime);
//   }
// }
// kelimeyazdır("merhaba", 3);

// function alanCevreHesapla(kisa, uzun) {
//   let alan = kisa * uzun;
//   let cevre = (kisa + uzun) * 2;

//   return ` alan: ${alan}, cevre: ${cevre}`;
// }
// console.log(alanCevreHesapla(3, 5));

// function yazitura() {
//   let random = Math.random();

//   if (random > 0.5) {
//     console.log("yazi");
//   } else {
//     console.log("tura");
//   }
// }
// yazitura();

// for (let i = 0; i < 5; i++) {
//   yazitura();
// }

// function tambolenleribul(sayi) {
//   let sayilar = [];
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i == 0) {
//       sayilar.push(i);
//     }
//   }
//   return sayilar;
// }
// console.log(tambolenleribul(20));

// function toplam(sayi1, sayi2) {
//   return sayi1 + sayi2;
// }

// let sonuc = toplam(50, 10);

// console.log(sonuc);

// function toplam() {
//   let sonuc = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sonuc += arguments[i];
//   }
//   return sonuc;
// }

// let sonuc;
// sonuc = toplam(10, 20);
// sonuc = toplam(10, 20, 30);
// sonuc = toplam(10, 20, 30, 40);
// console.log(sonuc);

//Dates ve Times
// let simdi = new Date();

//get methods
// sonuc = simdi;
// sonuc = simdi.getDate(); // gün
// sonuc = simdi.getDay(); // 0-6 => 0: cumartesi
// sonuc = simdi.getFullYear();

//set methods
// simdi.setFullYear(2026);
// simdi.setMonth(7);
// simdi.setDate(20);

// let dogumtarihi = new Date(1990, 5, 15);
// sonuc = dogumtarihi;
// sonuc = simdi.getFullYear() - dogumtarihi.get;
// sonuc = simdi;

// console.log(sonuc);

//Scopes => let, const sabit tanımlama

// global scope
var isim = "Ahmet";
const tc = "12345678632";

function yazdir() { //function scope
  var isim = "Can";
  var yas = 18;
  console.log(isim);
  console.log(yas);
}

if (true) {
  var isim = "Canan";
  let cinsiyet = "Kadın";
  console.log(isim);
  console.log(cinsiyet);
}

// fonksiyonlar kendi scope alanları oluşturur.
// block içerisinde yeni bir scope oluşmaz. (let, const)

// yazdir()
console.log(isim);
