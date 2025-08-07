"use strict";

//reference / refrensi

let user1 = {
  nama: "Henry",
  umur: 22,
};

let user2 = user1;

console.log("Object user1", user1);
console.log("Object user2", user2);

user2.umur = 25;

console.log("Object user1", user1.umur);

console.log("user 1 === user 2:", user1 === user2);

// solved this problem with spread operator {...}

let userAsli = {
  nama: "Pak Yoseph",
  umur: 30,
  pekerjaan: "Software Engineer",
};

let userCopy = { ...userAsli };
//tanstack query = cache & Redux

console.log("user asli === usercopy", userAsli === userCopy);

console.log("userAsli.nama", userAsli.nama);
console.log("userCopy", userCopy.nama);
