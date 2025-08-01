console.log("JavaScript is running!");

// Coba akses elemen HTML
const myHeading = document.getElementById("main-heading");

if (myHeading) {
  myHeading.textContent = "Halo dari JavaScript!";
  console.log("Heading text changed successfully.");
} else {
  console.log("Heading element not found (yet).");
}

// Tambahkan listener untuk DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired!");
  const headingOnLoad = document.getElementById("main-heading");
  if (headingOnLoad) {
    headingOnLoad.style.color = "blue";
    console.log("Heading color changed to blue after DOMContentLoaded.");
  } else {
    console.log("Heading element not found during DOMContentLoaded.");
  }
});

// Contoh sederhana untuk menunjukkan kapan skrip ini dieksekusi relatif terhadap rendering
alert("Skrip app.js sedang dieksekusi!"); // Ini akan memblokir rendering dan eksekusi
