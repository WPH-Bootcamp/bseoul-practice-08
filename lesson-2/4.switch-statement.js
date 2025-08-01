// Aktifkan Strict Mode (biar JavaScript lebih disiplin)
"use strict";

console.log("--- Demo Switch Statement ---");

// ===================================================
// CONTOH 1: Menentukan Hari Berdasarkan Angka
// ===================================================
console.log("\n--- Contoh 1: Menentukan Hari ---");

let hariAngka = 3; // Nilai bisa dari 1 sampai 7
let namaHari;

switch (hariAngka) {
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  case 4:
    namaHari = "Kamis";
    break;
  case 5:
    namaHari = "Jumat";
    break;
  case 6:
    namaHari = "Sabtu";
    break;
  case 7:
    namaHari = "Minggu";
    break;
  default:
    namaHari = "Bukan hari yang valid"; // Jika angka di luar 1-7
}

console.log("Hari ke-" + hariAngka + " adalah: " + namaHari);

// Coba ganti `hariAngka` jadi 6, 7, atau bahkan 10 dan lihat hasilnya

// ===================================================
// CONTOH 2: Pesan Berdasarkan Level Pengguna
// ===================================================
console.log("\n--- Contoh 2: Pesan Berdasarkan Level ---");

let levelPengguna = "admin"; // Bisa diganti: "guest", "user", "moderator", dll
let pesanSelamatDatang;

switch (levelPengguna) {
  case "guest":
    pesanSelamatDatang = "Selamat datang, Tamu!";
    break;
  case "user":
    pesanSelamatDatang = "Halo Pengguna Biasa!";
    break;
  case "admin":
    pesanSelamatDatang = "Selamat datang, Admin. Akses penuh tersedia.";
    break;
  case "moderator":
    pesanSelamatDatang = "Selamat datang, Moderator.";
    break;
  default:
    pesanSelamatDatang = "Level pengguna tidak dikenal.";
}

console.log("Pesan untuk level '" + levelPengguna + "': " + pesanSelamatDatang);

// Silakan coba ubah `levelPengguna` untuk lihat hasil lain

// ===================================================
// CONTOH 3: Fall-through (sengaja tidak pakai break)
// ===================================================
console.log("\n--- Contoh 3: Fall-through (Tanpa 'break') ---");

let buah = "jeruk";

switch (buah) {
  case "jeruk":
    console.log("Ini buah sitrus."); // Akan jalan
  // Tidak ada 'break', jadi lanjut ke case selanjutnya
  case "apel":
  case "mangga":
    console.log("Ini buah favorit!"); // Juga jalan (fall-through)
    break;
  default:
    console.log("Ini bukan buah yang saya kenal.");
}

// Output kalau buah = "jeruk":
// → Ini buah sitrus.
// → Ini buah favorit!

// Fall-through berguna kalau beberapa case mau jalankan kode yang sama,
// tapi harus hati-hati, karena bisa bikin hasil tidak sesuai kalau keliru.

// ===================================================
// CONTOH 4: Switch dengan Boolean (kurang umum, tapi bisa)
// ===================================================
console.log("\n--- Contoh 4: Switch dengan Boolean ---");

let isCuacaHujan = true;

switch (isCuacaHujan) {
  case true:
    console.log("Bawa payung!");
    break;
  case false:
    console.log("Cuaca cerah, nikmati hari!");
    break;
}

// Catatan: Untuk kondisi seperti ini, if/else sebenarnya lebih umum dan lebih mudah dibaca.
// Tapi switch tetap bisa dipakai kalau memang mau pisahkan banyak kondisi berdasarkan nilai boolean atau ekspresi lainnya.

// ===================================================
console.log("\n--- Demo Switch Statement Selesai ---");
