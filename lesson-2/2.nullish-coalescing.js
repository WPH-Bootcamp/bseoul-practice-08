// Aktifkan Strict Mode (biar JavaScript lebih disiplin dan lebih aman)
"use strict";

console.log("--- Demo Nullish Coalescing Operator (??) ---");

// =========================================
// BAGIAN 1: Penggunaan Dasar ?? (Nullish)
// =========================================
console.log("\n--- Penggunaan Dasar ?? ---");

let namaPengguna = null;
let namaDefault = "Tamu";

// Kalau namaPengguna null atau undefined, maka pakai namaDefault
let displayNama = namaPengguna ?? namaDefault;
console.log("Nama Pengguna (null) ?? Default:", displayNama); // Output: Tamu

let umurPengguna = undefined;
let umurDefault = 0;
let displayUmur = umurPengguna ?? umurDefault;
console.log("Umur Pengguna (undefined) ?? Default:", displayUmur); // Output: 0

let skorGame = 100; // nilai valid, bukan null/undefined
let skorDefault = 0;
let displaySkor = skorGame ?? skorDefault;
console.log("Skor Game (100) ?? Default:", displaySkor); // Output: 100

let pesan = "Halo Dunia";
let pesanDefault = "Tidak ada pesan";
let displayPesan = pesan ?? pesanDefault;
console.log("Pesan ('Halo Dunia') ?? Default:", displayPesan); // Output: Halo Dunia

// =========================================
// BAGIAN 2: Perbandingan ?? vs ||
// =========================================
console.log("\n--- Perbandingan dengan Operator OR (||) ---");

// Saat nilai null atau undefined, hasilnya sama
let varNull = null;
let varUndefined = undefined;
let nilaiCadangan = "Nilai Asli";

console.log("varNull (null) ?? nilaiCadangan:", varNull ?? nilaiCadangan); // Output: Nilai Asli
console.log("varNull (null) || nilaiCadangan:", varNull || nilaiCadangan); // Output: Nilai Asli

console.log(
  "varUndefined (undefined) ?? nilaiCadangan:",
  varUndefined ?? nilaiCadangan
); // Output: Nilai Asli
console.log(
  "varUndefined (undefined) || nilaiCadangan:",
  varUndefined || nilaiCadangan
); // Output: Nilai Asli

// --- Perbedaan mulai muncul saat nilai adalah falsy tapi BUKAN null/undefined ---
console.log("\n--- Perbedaan Utama (0 dan String Kosong) ---");

let jumlahItem = 0;
let defaultJumlah = 1;

// Dengan ?? hasilnya tetap 0 (karena 0 bukan null/undefined)
let finalJumlah_nullish = jumlahItem ?? defaultJumlah;
console.log(
  "Jumlah Item (0) ?? Default:",
  finalJumlah_nullish,
  "| Tipe:",
  typeof finalJumlah_nullish
); // Output: 0

// Dengan || hasilnya 1 (karena 0 dianggap "false", jadi default dipakai)
let finalJumlah_or = jumlahItem || defaultJumlah;
console.log(
  "Jumlah Item (0) || Default:",
  finalJumlah_or,
  "| Tipe:",
  typeof finalJumlah_or
); // Output: 1

let namaDepan = "";
let defaultNama = "Anonim";

// Dengan ?? hasilnya tetap "" (string kosong dianggap valid)
let finalNama_nullish = namaDepan ?? defaultNama;
console.log(
  "Nama Depan ('') ?? Default:",
  finalNama_nullish,
  "| Tipe:",
  typeof finalNama_nullish
); // Output: ''

// Dengan || hasilnya "Anonim" (karena '' dianggap false)
let finalNama_or = namaDepan || defaultNama;
console.log(
  "Nama Depan ('') || Default:",
  finalNama_or,
  "| Tipe:",
  typeof finalNama_or
); // Output: Anonim

// =========================================
// BAGIAN 3: Contoh Penggunaan Praktis
// =========================================
console.log("\n--- Contoh Praktis ---");

// Setting volume dari user, kalau belum diset (null/undefined), pakai default
let userSettingVolume = null;
let defaultVolume = 70;

let volumeAktif = userSettingVolume ?? defaultVolume;
console.log("Volume aktif:", volumeAktif); // Output: 70

// Sekarang user sengaja atur volume ke 0 (mungkin mau senyap)
userSettingVolume = 0;
volumeAktif = userSettingVolume ?? defaultVolume;
console.log("Volume aktif (user set 0):", volumeAktif); // Output: 0 (karena 0 dianggap valid)

let volumeDenganOr = userSettingVolume || defaultVolume;
console.log("Volume aktif (user set 0 dengan ||):", volumeDenganOr);
// Output: 70 --> padahal user niatnya 0, tapi || menganggap 0 itu 'kosong'

// =========================================
console.log("\n--- Demo Nullish Coalescing Operator Selesai ---");
