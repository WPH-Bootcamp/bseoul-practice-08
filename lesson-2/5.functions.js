// let hasil1 = 10 + 3;
// let hasil2 = 2 + 5;

// console.log(hasil1);
// console.log(hasil2);

// function tambah(angka1, angka2) {
//   let hasil = angka1 + angka2;
//   return hasil;
// }
// let total = tambah(10, 3);
// let total2 = tambah(5, 4);
// let total3 = tambah(6, 7);
// let total4 = tambah(9, 8);
// console.log(total);
// console.log(total2);
// console.log(total3);
// console.log(total4);

// console.log("Demo basic functions");
// fungsi ini hanya menampilkan pesan

// console.log("\n--- fungsi tanpa parameter dan tanpa return");
// function tampilkanSalam() {
//   console.log("Hallo, selamat belajar javascript");
// }

// tampilkanSalam();
// tampilkanSalam();

// contoh 2: fungsi dengan parameter tanpa return

// function tampilkanSalam(nama) {
//   let salam = "selamat datang " + nama + "!";
//   return salam;
// }

// let salam = tampilkanSalam("Henry");
// console.log(salam);

// let salam2 = tampilkanSalam("Thomas");
// console.log(salam2);

// contoh 3: fungsi dengan paramater dan dengan return
// function hitungluasPersegiPanjang(panjang, lebar) {
//   let luas = panjang * lebar;
//   return luas;
// }

// let luasRuangan = hitungluasPersegiPanjang(10, 5);
// console.log("Luas ruangan adalah: ", +luasRuangan + " meter persegi");

// let luasRuangan2 = hitungluasPersegiPanjang(20, 10);
// console.log("Luas ruangan adalah: ", +luasRuangan2 + " meter persegi");

// 1. Function declaration'
// console.log("Function declaration");

// sapaPagi("henry"); //karena hoisting

// function sapaPagi(nama) {
//   console.log("Selamat Pagi, " + nama + "!");
// }

// sapaPagi("bowie");

// // 2. Function expression
// console.log("Function Expression");

// let sapaSore = function (nama) {
//   console.log("Selamat Sore, " + nama + "!");
// };
// sapaSore("rivardo");

//3. arrow function
const tambah = (a, b) => {
  return a + b;
};

console.log(tambah(5, 7));

const kurang = (c, d) => c - d;

console.log(kurang(10, 5));

// request pak farid
function hitung(a, b, c) {
  let hasil = a * b + c;
  return hasil;
}

let angka1 = 5;
let angka2 = 2;
let angka3 = 3;

let hasilAkhir = hitung(angka1, angka2, angka3);

console.log(`Hasil dari ( ${angka1} * ${angka2}) + ${angka3}: ${hasilAkhir}`);
