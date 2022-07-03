// TODO 1 : buat atau impor variabel EventEmitter dari core module events

const { EventEmitter } = require("events");

const birthdayEventListener = ({ name }) => {
    console.log(`Happy birthday ${name}!`);
};

const age = ({ umur }) => {
    console.log(`umurmu sekarang sudah ${umur}`);
};

const hadiah = ({ surprise }) => {
    console.log(`Yeyyyyy, aku punya ${surprise} buat kamuuu, semoga suka, yaa!`);
};

const myEmitter = new EventEmitter();

myEmitter.on("birthday", birthdayEventListener);
myEmitter.on("birthday", age);
myEmitter.on("birthday", hadiah);
myEmitter.emit("birthday", { name: "Shinta", umur: 19, surprise: "yupi" });

// fungsi on menerima  buah argumen, yaitu nama event dan listener (fungsi yang akan dieksekusi(emit))
// emit digunakan ntuk membangkitkan event