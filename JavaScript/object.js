const user = {
    firstName: "Shinta",
    lastName: "Nurrohmah",
    age: 19,
    isStress: true,
    "address live": "banyumas",
};

//cara mengakses objek

console.log(`Hallo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age}`);

// bisa menambahkan objek di dalam objek
// example

const warna = {
    laptop: "silver",
    mouse: "hitam",
    meja: "hitam",
    "warna keyboard": "warna cinta",
    coba: {
        ini: "coba",
        itu: "coba juga",
        "ini itu": "terserah",
    },
};

myArray = [warna, 12, "aku", "bingung", "mau", "ngisi apa", 89];
console.log(myArray);

let bintang = ["betelgeuse", "aries", "caris majoris", 12, 334, 562, 124];

bintang.push(warna);
console.log(bintang);
console.log();
console.log();

console.log(bintang[7].coba["ini itu"]);

bintang.pop(bintang[7].coba["ini itu"]);
console.log(bintang);

console.log("awal");

for (let i = 1; i <= 10; i++) {
    console.log();
}

console.log("akhir");