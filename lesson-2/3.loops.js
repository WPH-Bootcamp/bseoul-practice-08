// Aktifkan Strict Mode (buat ngaktifin mode disiplin JavaScript)
"use strict";

console.log("--- Demo While dan For Loops ---");

// ===================================================
// BAGIAN 1: WHILE LOOP
// ===================================================
console.log("\n--- While Loop ---");

let hitunganWhile = 0; // Mulai dari 0
console.log("Mulai hitungan While dari 0:");

while (hitunganWhile < 5) {
  // Selama nilai hitunganWhile masih di bawah 5, jalankan ini
  console.log("Ini putaran ke-" + (hitunganWhile + 1));
  hitunganWhile++; // Tambah 1 setiap putaran
  // Penting! Kalau baris ini hilang, loop-nya gak akan pernah berhenti!
}

console.log("While Loop selesai! Hitungan terakhir:", hitunganWhile); // Output: 5

// ---------------------------------------------------
// Contoh While Loop: Validasi Password Sederhana
// ---------------------------------------------------
console.log("\n--- Contoh While Loop: Password Sederhana ---");

let passwordBenar = "rahasia";
let inputPassword = "";
let percobaan = 0;

// Contoh ini pakai prompt, jadi ga bisa langsung dijalankan di semua environment
/*
while (inputPassword !== passwordBenar && percobaan < 3) {
    inputPassword = prompt("Masukkan password (percobaan ke-" + (percobaan + 1) + "):");

    if (inputPassword === null) {
        console.log("Percobaan dibatalkan oleh user.");
        break; // keluar dari loop kalau user klik "Cancel"
    }

    percobaan++;

    if (inputPassword !== passwordBenar && percobaan < 3) {
        alert("Password salah! Coba lagi.");
    }
}

if (inputPassword === passwordBenar) {
    console.log("Password benar! Selamat datang.");
} else if (percobaan >= 3) {
    console.log("Sudah 3 kali mencoba. Akses ditolak.");
}
*/
console.log(
  "(* Contoh Password di-comment agar tidak muncul prompt otomatis. Bisa dicoba kalau mau.)"
);

// ===================================================
// BAGIAN 2: FOR LOOP
// ===================================================
console.log("\n--- For Loop ---");

console.log("Mulai hitungan dari 1 sampai 5:");
for (let i = 1; i <= 5; i++) {
  console.log("Baris ke-" + i);
}
console.log("For Loop selesai!");

// ---------------------------------------------------
// Contoh: Menampilkan angka genap
// ---------------------------------------------------
console.log("\n--- Contoh For Loop: Angka Genap ---");
console.log("Angka genap dari 0 sampai 10:");

for (let j = 0; j <= 10; j += 2) {
  // Tambah 2 supaya langsung loncat ke angka genap berikutnya
  console.log(j);
}

// ---------------------------------------------------
// Contoh: Hitung Mundur
// ---------------------------------------------------
console.log("\n--- Contoh For Loop: Hitung Mundur ---");
console.log("Hitung mundur dari 3:");

for (let k = 3; k > 0; k--) {
  console.log(k);
}
console.log("GO!"); // Setelah hitung mundur selesai

// ===================================================
// BAGIAN 3: Infinite Loop (PERINGATAN SERIUS!)
// ===================================================
console.log("\n--- Peringatan: Infinite Loop ---");
console.log(
  "Kalau kondisi di dalam loop SELALU BENAR, maka program TIDAK AKAN BERHENTI!"
);

// Contoh infinite loop (JANGAN DICOBA TANPA BATASAN!)
/*
let counter = 0;
while (true) {
    console.log("Ini tidak akan berhenti! " + counter);
    counter++;
    // Tanpa break atau kondisi berhenti, ini akan jalan terus selamanya
}
*/

console.log("(* Infinite loop di-comment supaya tidak bikin browser hang!)");

console.log("\n--- Demo While & For Loops Selesai ---");
