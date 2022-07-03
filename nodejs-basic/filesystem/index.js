// Import fs dari library fs
const fs = require("fs");
// Import method resolve dari library path
const { resolve } = require("path");
// Buat fungsi callback yang menerima 2 parameter, error dan data
const fileReadCallback = (error, data) => {
    // Jika terjadi error tulis pesan di console
    if (error) {
        console.log("Gagal membaca berkas");
        return;
    }
    // Jika berhasil membaca berkas, tulis hasilnya di console
    console.log(data);
};
// Panggil method readFile dengan memasukkan argumen path file yang ingin dibaca, tipe encoding-nya, dan fungsi callback yang telah didefinisikan di atas
// Fungsi callback ini akan dijalankan saat proses pembacaan berkas
fs.readFile(resolve(__dirname, "notes.txt"), "UTF-8", fileReadCallback);