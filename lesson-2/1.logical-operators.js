// Aktifkan Strict Mode (biar JavaScript lebih disiplin dan aman)
"use strict";

console.log("--- Demo Logical Operators (&&, ||, !) ---");

// ==================================================
// BAGIAN 1: Operator AND (&&)
// ==================================================
console.log("\n--- Operator AND (&&) ---");

let umur = 20;
let punyaSIM = true;
let sudahLunas = false;

// Syarat bisa sewa mobil: umur minimal 18 DAN punya SIM
let bisaSewaMobil = umur >= 18 && punyaSIM;
console.log("Bisa sewa mobil (umur >= 18 && punyaSIM):", bisaSewaMobil);
// true && true --> true

// Syarat dapat diskon lansia: umur minimal 60 DAN sudah lunas
let dapatDiskonLansia = umur >= 60 && sudahLunas;
console.log(
  "Dapat diskon lansia (umur >= 60 && sudahLunas):",
  dapatDiskonLansia
);
// false && false --> false

// ==================================================
// BAGIAN 2: Operator OR (||)
// ==================================================
console.log("\n--- Operator OR (||) ---");

let adaMakanan = false;
let adaMinuman = true;
let punyaUang = true;

// Bisa survive kalau ada makanan ATAU ada minuman
let bisaSurvive = adaMakanan || adaMinuman;
console.log("Bisa survive (adaMakanan || adaMinuman):", bisaSurvive);
// false || true --> true

// Bisa beli sesuatu kalau ada makanan ATAU punya uang
let bisaBeli = adaMakanan || punyaUang;
console.log("Bisa beli (adaMakanan || punyaUang):", bisaBeli);
// false || true --> true

// Contoh kombinasi: dua kondisi bernilai false
let tidakAdaApaApa = adaMakanan || (punyaUang && !punyaUang);
console.log(
  "Tidak ada apa-apa (adaMakanan || (punyaUang && !punyaUang)):",
  tidakAdaApaApa
);
// false || (true && false) --> false || false --> false

// ==================================================
// BAGIAN 3: Operator NOT (!)
// ==================================================
console.log("\n--- Operator NOT (!) ---");

let isOnline = false;
let isPenuh = true;

// Operator NOT membalik nilai boolean
console.log("!isOnline:", !isOnline); // !false --> true
console.log("!isPenuh:", !isPenuh); // !true --> false

let punyaTiket = true;
let dilarangMasuk = !punyaTiket;
// Kalau TIDAK punya tiket, maka dilarang masuk
console.log(
  "Dilarang masuk jika tidak punya tiket (!punyaTiket):",
  dilarangMasuk
);
// !true --> false (artinya boleh masuk karena punya tiket)

// ==================================================
// BAGIAN 4: Kombinasi dan Prioritas
// ==================================================
console.log("\n--- Kombinasi dan Prioritas ---");

let nilaiMatematika = 85;
let nilaiBahasa = 70;
let rajinPR = true;

// Lulus sekolah jika (nilai matematika >= 80 DAN bahasa >= 75) ATAU rajin ngerjain PR
let lulusSekolah = (nilaiMatematika >= 80 && nilaiBahasa >= 75) || rajinPR;
//               (true && false) || true --> false || true --> true
console.log("Lulus sekolah:", lulusSekolah); // Output: true

// Masuk universitas jika nilai matematika >= 90 DAN (bahasa >= 80 ATAU rajin PR)
let masukUniversitas = nilaiMatematika >= 90 && (nilaiBahasa >= 80 || rajinPR);
//                   false && (false || true) --> false && true --> false
console.log("Masuk universitas:", masukUniversitas); // Output: false

console.log("\n--- Demo Logical Operators Selesai ---");
