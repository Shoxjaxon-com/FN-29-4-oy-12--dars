// 1 - masala
// let arr = [1, 2, 3, 4, 5]
// function yigindi(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum;
// }
// console.log(yigindi(arr));

// 2 - masala

// let arr = [1, 2, 3, 4, 5]
// function yigindi(arr) {
//     let res = Math.min(...arr)
//     return res;
// }
// console.log(yigindi(arr));

// 3 - masala
// let arr = ['Salom']
// function text(arr) {
//     let res = arr.join().length
//     return res
// }
// console.log(text(arr));

// 4 - masala
// let arr = [1, 2, 3, 4, 5]
// function teskari(arr) {
//     let res = arr.sort(function (a, b) {
//         return b - a
//     })
//     return res
// }
// console.log(teskari(arr));

// 5 - masala
// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// function birlashtirish(arr1, arr2) {
//     let res = arr1.concat(arr2)
//     return res
// }
// console.log(birlashtirish(arr1, arr2));

// 6 - masala
// let arr = [1, 2, 3, 4, 5]
// function teskari(arr) {
//     let res = arr.reverse()
//     return res
// }
// console.log(teskari(arr));

// 7 - masala
// let arr = [1, 2, 3, 4, 5, -6, -7, -8, -9, -10]
// let res = []
// function musbat(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(musbat(arr));

// 9 - masala

// let arr = [1, 2, 3, 4, 5 - 6, -7, -8, -9, -10]
// function musbat(arr) {
//     let musbat = []
//     let manfiy = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             musbat.push(arr[i])
//         } else {
//             manfiy.push(arr[i])
//         }
//     }
//     return { musbat, manfiy }
// }
// console.log(musbat(arr));

// 11 - masala
// let arr = [1, 2, 3, 4, 5,]
// function ortaQiymat(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length
// }
// console.log(ortaQiymat(arr));

// 12 - masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function juftToq(arr) {
//     let juft = []
//     let toq = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             toq.push(arr[i])
//         } else {
//             juft.push(arr[i])
//         }
//     }
//     return { toq, juft }

// }
// console.log(juftToq(arr));

// 13 - masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function juftToq(arr) {
//     arr.pop()
//     return arr
// }
// console.log(juftToq(arr));

// 14 - masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function juftToq(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         res.push(arr[i] ** 2)
//     }
//     return res

// }
// console.log(juftToq(arr));

// 15 - masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function juftToq(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         res.push(arr[i] * 2)
//     }
//     return res

// }
// console.log(juftToq(arr));

// 16 - masala
// let arr = [1, null, 2, undefined, 3]
// function qiymat(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== null && arr[i] !== undefined) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(qiymat(arr));

// 17 - masala
// let arr = ["apple", "banana", "cherry"]
// function boshHarif(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         let str = arr[i]
//         let harif = str[0].toUpperCase() + str.slice(1)
//         res.push(harif)
//     }
//     return res
// }
// console.log(boshHarif(arr));

// 18 - masala
// let arr = [1, 2, 3, 4, 1, 2, 1]
// function takror(arr, value) {
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             count++
//         }
//     }
//     return count;
// }
// console.log(takror(arr, 1));

// 20 - masala
// let arr = ["apple", "kiwi", "banana", "cherry"]
// function tartib(arr) {
//     return arr.sort((a, b) => a.length - b.length)
// }
// console.log(tartib(arr));

// 21 - masala
// let str = ["apple", "banana", "cherry", "watermelon"];
// function uzun(arr) {
//     let res = "";
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > res.length) {
//             res = arr[i];
//         }
//     }
//     return res;
// }

// console.log(uzun(str));

// 22 - masala
// function ajratish(arr) {
//     return arr.join(", ");
// }

// console.log(ajratish(["apple", "banana", "cherry"]));

// 23 - masala
// function raqam(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }

// let arr = [1, "2", 3, "apple", 4, null, 5];
// console.log(raqam(arr));

// 24 - masala

// function nElemnt(arr, n) {
//     return arr.slice(-n);
// }

// console.log(nElemnt([1, 2, 3, 4, 5], 3));
