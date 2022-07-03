/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require("fs");

const readableStream = fs.createReadStream("input.txt", { highWaterMark: 15 });

readableStream.on("readable", () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        console.log("error bro");
    }
});

const writeableStream = fs.createWriteStream("output.txt");
writeableStream.write("ini");
writeableStream.write("shin");
writeableStream.write("hehe");
writeableStream.end("selesai");

// kalau createReadStream menerima 2 argumen, yang pertama file apa yang akan dibaca, yang kedua adalah highWaterMark atau berapa panjang pecahan-pecahannya.
// kalau createWriteStream menerima 1 argumen yaitu nama file yang digunakan untuk meletakan hasil dari streamnya.

// fungsi createReadStream() menerima 2 argumen. lokasi berkas yang akan dibaca dan objek konfigurasi.
// di dalam objek konfigurasi, dapat menetapkan ukuran buffer melalui properti highWaterMark. nilai default properti: 16384 bytes.

// buffer dalam stream adalah memori sementara untuk menyimpan data stream agar dapat dikonsumsi.

// createWriteStream menerima satu argumen yaitu tempat tulisan disimpan.
// .write digunakan untuk menuliskan data pada writeble stream.
// .end() digunakan untuk enanda bahwa proses writable stream telah selesai.