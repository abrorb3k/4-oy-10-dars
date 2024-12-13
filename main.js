//==================forEach uchun masalalar========================

//=================================================================
//1-Berilgan massivdagi barcha elementlarni ekranga chiqaruvchi dastur yozing.
// let arr=[1,2,3,4,5,6,7,8,9];
// arr.forEach(function(value){
//      console.log(value)
// })

//=================================================================
//2-Massivdagi har bir elementning kvadratini hisoblang va ekranga chiqaring.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach(function (value) {
//   console.log(value**2);
// });

//=================================================================
//3-Massivdagi barcha elementlarni ikkiga ko'paytiring va ularni yangi massivga joylang.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res=[]
// arr.forEach(function (value) {
//    res.push(value*2);
// });
// console.log(res);

//=================================================================
//4-Berilgan massivdan 5 dan katta bo'lgan barcha elementlarni topib, ularni ekranga chiqaruvchi dastur yozing.
// let arr=[2,7,8,9,5,6]
// arr.forEach(function(value){
//      if(value>5){
//         console.log(value)
//      }
// })

//=================================================================
//5-Har bir elementga 10 qo'shib, yangi massivga saqlang.
// let arr=[1,2,3,4,5,6,7,8,9];
// let res=[]
// arr.forEach(function(value){
//    res.push(value+10)
// })
// console.log(res)

//=================================================================
//6-Massivdagi barcha juft sonlarni ekranga chiqaring.
// let arr = [1,2,3,4,5,6,7,8,9];
// arr.forEach(function (value) {
//   if (value % 2 == 0) {
//     console.log(value);
//   }
// });

//=================================================================
//7-Har bir elementning teskari tartibini chiqaruvchi dastur yozing (reverse bilan).
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//    arr.reverse();
//    arr.forEach(function(value){
//    console.log(value)
// })

//=================================================================
//8-Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni ekranga chiqaring (includes bilan).
// let arr = ["Apple", "Pineapple", "Orange"];
// arr.forEach(function(value){
//     if(value.includes("a") || value.includes("A")){
//         console.log(value)
//     }
// })

//=================================================================
//9-Massivdagi har bir elementni yangi massivga indexOf orqali indeks bilan birlashtiring.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let res = []
// arr.forEach(function(value){
//     res.push(value)
// })
// console.log(res)

//=================================================================
//10-Har bir elementni vergul orqali birlashtirib, satr ko'rinishida chiqaruvchi dastur yozing (join bilan).
// let arr= [1,2,3,4,5,6,7,8,9]
//      let res = arr.join();
//  console.log(res)

//=================================================================
//11-Massivdagi har bir elementdan faqat birinchi 3 belgisini chiqaruvchi dastur yozing (slice bilan).
// let arr = ["Hello", "Apple", "Pineapple", "Grapes"];
// arr.forEach(function(value){
//     const res = value.slice(0,3)
//     console.log(res);
// })

//=================================================================
//12-Har bir elementning oxirgi belgisini chiqaruvchi dastur yozing.
// let arr = ["Hello", "Apple", "Pineapple", "Grapes"];
// arr.forEach(function (value) {
//   const res = value.slice(value.length-1);
//   console.log(res);
// });

//=================================================================
//13-Massivdagi har bir elementni uzunligiga qarab tartiblang va natijani ekranga chiqaring (sort bilan).
// let arr = ["PiNeApLlE", "Apple", "ORANge"];
// const res=[...arr].sort((a,b)=>a.length-b.length)
// res.forEach(value=>{console.log(value)})

//=================================================================
//14-Har bir elementga oxiriga ! qo'shing va yangi massivga saqlang.
// let arr = [1,2,3,4,5,6,7,8,9];
// let res = []
// arr.forEach(function(value){
//    res.push(value+"!")
// })
// console.log(res)

//=================================================================
//15-Berilgan massivning barcha elementlarini kichik harflarga o'zgartirib ekranga chiqaring.
// let arr = ["Apple", "ORANge", "PiNeApLlE"];
// let res = []
// arr.forEach(function(value){
//    res.push(value.toLowerCase())
// })
// console.log(res)

//====================Map uchun masaslalar=========================
//=================================================================
//1-Massivdagi har bir elementni 2 barobar kattalashtirib yangi massivga saqlang.
// let arr=[1,2,3,4,5]
// let res=arr.map(function(value){
//    return value*2
// })
// console.log(res)

//=================================================================
//2-Har bir elementning kvadratini hisoblab yangi massivga saqlang.
// let arr=[1,2,3,4,5,6,7,8,9]
// let res=arr.map(function(value){
//    return value**2;
// })
// console.log(res)

//=================================================================
//3-Massivdagi barcha elementlarni teskari tartibda yangi massivga saqlang (reverse bilan).
// let arr=[1,2,3,4,5]
// arr.reverse();
// let res=arr.map(function(value){
//    return value
// })
// console.log(res)

//=================================================================
//4-Har bir elementdan oxirgi 3 ta belgisini olib yangi massivga saqlang (slice bilan).
// let arr = ["Apple", "ORANge", "PiNeApLlE"];
// let res = [];
// arr.map(function (value) {
//   res.push(value.slice(value.length-3));
// });
// console.log(res);

//=================================================================
//5-Har bir elementni katta harf bilan yozib yangi massivga saqlang.
// let arr = ["Apple", "ORANge", "PiNeApLlE"];
// let res = []
// arr.map(function(value){
//    res.push(value.toUpperCase())
// })
// console.log(res)

//=================================================================
//6-Har bir elementga "Hello, " qo'shib yangi massivga saqlang.
// let arr = [1, 2, 3, 4, 5];
// let res = arr.map(function (value) {
//   return value+" Hello";
// });
// console.log(res);

//=================================================================
//7-Har bir elementni ikki marta takrorlang va yangi massivga saqlang.
// let arr = [1, 2, 3, 4, 5];
// let result = []
// let res = arr.map(function (value) {
//   result.push(value,value);
// });
// console.log(result);

//=================================================================
//8-Har bir elementning uzunligini aniqlang va yangi massivga saqlang.
// let arr = ["Pineapple","Apple","Orange","Grapes"];
// const res=arr.map(value=>value.length)
// console.log(res)

//=================================================================
//9-Har bir elementning indeksini element bilan birlashtirib yangi massivga saqlang (indexOf bilan).
// let arr = [564, "Apple", "Orange", "Grapes"];
// const res=arr.map(value=>`${value}-${arr.indexOf(value)}`)
// console.log(res)

//=================================================================
//10-Har bir elementning teskari yozilishini hisoblab yangi massivga saqlang (split, reverse, join bilan).

//=================================================================
//11-Massivdagi har bir elementdan boshidagi va oxiridagi belgisini olib tashlang (slice bilan).
// let arr = [ "Apple", "Orange", "Grapes"];
//   const res = arr.map(function(value){
//     return (value.slice(1,value.length-1))
// })
// console.log(res)

//=================================================================
//12-Massivdagi barcha elementlarni tartiblab yangi massivga saqlang (sort bilan).
// let res=[]
// let arr = ["Apple", "Orange", "Grapes"];
//   res=arr.sort();
//    console.log(res)

//=================================================================
//13-Har bir elementni katta harfga o‘zgartiring va yangi massivga saqlang.
// let arr = ["Apple", "ORANge", "PiNeApLlE"];
// let res = [];
// arr.map(function (value) {
//   res.push(value.toUpperCase());
// });
// console.log(res);

//=================================================================
//14-Har bir elementning uzunligi 5 dan katta yoki kichik ekanligini belgilang va yangi massivga saqlang.
// let arr=["Helloo","World!","grape","banana"]
// let katta=[];
// let kichik=[]
// arr.forEach(function(value){
//      if(value.length>5){
//         katta.push(value)
//      }else{
//         kichik.push(value)
//      }
// })
// console.log(katta)
// console.log(kichik);

//=================================================================
//15-Har bir elementdan faqat sonlarni olib yangi massivga saqlang.
// let arr = ["cd123vb4","567rc8gf"];
// let res = [];
// arr.forEach(value => {let stringArr = value.split('');
//     for(const iterator of stringArr){
//         if(Number(iterator)){
//             res.push(iterator)
//         }
//     }
// })
// console.log(res);

//====================Filter uchun masaslalar======================

//=================================================================
//1-Berilgan massivdan faqat juft sonlarni olib tashlang va yangi massivga saqlang.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = arr.filter(function (value) {
//   return value % 2 == 0;
// });
// console.log(res);

//=================================================================
//2-Massivdan faqat manfiy sonlarni olib yangi massivga saqlang.
// let arr = [-1, 2, -3, 4, 5, 6, 7, 8, 9];
// let res = arr.filter(function (value) {
//   return value < 0;
// });
// console.log(res);

//=================================================================
//3-Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni olib yangi massivga saqlang (includes bilan).
// let arr = ["Apple", "Pineapple", "Orange"];
// arr.filter(function (value) {
//   if (value.includes("a")) {
//     console.log(value);
//   }
// });

//=================================================================
//4-Faqat uzunligi 5 dan katta bo'lgan elementlarni olib yangi massivga saqlang.
// let arr = [-1, 2, -3, 4, 5, 6, 7, 8, 9];
// let res = arr.filter(function (value) {
//   return value > 5;
// });
// console.log(res);

//=================================================================
//5-Berilgan massivdan faqat "test" so‘zini o‘z ichiga olgan elementlarni olib yangi massivga saqlang.
// let arr = ["Hello", "appletest", "Pinetestapple", "Orange"];
// let res = arr.filter((value) => !value.includes("test"));
// console.log(res);

//=================================================================
//6-Massivdan faqat teskari tartibda joylashtirilgan elementlarni olib yangi massivga saqlang (reverse bilan).
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);

//=================================================================
//7-Massivdan faqat 0 dan katta bo'lgan sonlarni olib yangi massivga saqlang.
// let arr = [-1, 2, -3, 4, 5, 6, 7, 8, 9];
// let res = arr.filter(function (value) {
//   return value > 0;
// });
// console.log(res);

//=================================================================
//8- Faqat sonlar mavjud bo'lgan elementlarni olib yangi massivga saqlang.
// let arr = ["hello",234,"34"]
// let res = arr.filter(value=>{

// })

//=================================================================
//9-Faqat uzunligi 3 dan kichik bo‘lgan elementlarni olib yangi massivga saqlang.
// let arr = ["Apple", "hello","Hi", "Go", "World"];
// let res = arr.filter(value => value.length<3);
// console.log(res);

//=================================================================
//10-Berilgan massivdan faqat unli harflardan iborat elementlarni olib yangi massivga saqlang.
// let arr = [23,"a", "e", "d", "v"]
// let wovels=["a","b","e","o","u"]

// let res= arr.filter(value=>{
//    if (wovels.includes(value)){
//     console.log(value)
//    }
// })

//=================================================================
//11-Faqat boshida "abc" bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).
// let arr = ["abcApple", "Pineapple", "abcOrange"];
//   let res = arr.filter(function (value) {
//   return value.startsWith("abc")
// });
// console.log(res)

//=================================================================
//12-Faqat oxirida "xyz" mavjud bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).
// let arr = ["Apple xyz", "Pineapplexyz", "Orange"];
// let res = arr.filter(function (value) {
//   return value.slice(-3)=="xyz";
// });
// console.log(res);

//=================================================================
//13-Berilgan massivdan faqat qiymati 10 dan kichik bo‘lgan sonlarni olib yangi massivga saqlang.
// let arr = [-1, 2, -3, 40, 5, 6, 7, 8, 90];
// let res = arr.filter(function (value) {
//   return value < 10;
// });
// console.log(res);

//=================================================================
//14-Faqat "test" so‘zini o‘z ichiga olmagan elementlarni olib yangi massivga saqlang (includes bilan).
// let arr = ["Hello","appletest", "Pinetestapple", "Orange"];
// let res = arr.filter(value=>!value.includes("test"));
// console.log(res);

//=================================================================
//15-Faqat uzunligi eng uzun bo‘lgan elementlarni olib yangi massivga saqlang.
// let arr = ["apple","pineapple","grape"];
// let maxLength=arr[0].length;
// arr.forEach(value=>{
//     if(value.length>maxLength){
//         maxLength=value.length
//     }
// })
// let res = arr.filter(value=>{
//     return value.length==maxLength
// })
// console.log(res);
