// 1 . entitas
let nama = "henry rivardo";
let umur = "22";
let pekerjaan = "software engineer";

console.log("\n---- membuat object");
let dataPengguna = {
  nama: "Henry Rivardo",
  umur: 22,
  kotaAsal: "Jakarta",
  isVerified: true,
};

console.log("Object pengguna", dataPengguna);

console.log("Nama pengguna", dataPengguna.nama);
console.log("Nama pengguna", dataPengguna.umur);

//mengubah properti
dataPengguna.umur = 23;

console.log("Umur baru:", dataPengguna.umur);

// akses dengan bracket

console.log("Kota asal", dataPengguna["nama"]);

delete dataPengguna.isVerified;
console.log("Object setelah properti isVerified di hapus", dataPengguna);

console.log("\n----- object didalam object");

let buku = {
  judul: "How to become software engineer",
  penulis: {
    nama: "Henry Rivardo",
    umur: 22,
  },
  tahunTerbit: 2026,
};

console.log("Nama Penulis", buku.penulis.nama);

console.log("\n--- fungsi didalam object");

let kalkulator = {
  tambah: function (a, b) {
    return a + b;
  },
};

let hasilTambah = kalkulator.tambah(10, 5);
console.log("Hasil 10 + 5", hasilTambah);
