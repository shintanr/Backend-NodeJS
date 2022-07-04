const hapi = require("@hapi/hapi");

const init = async() => {
    const server = hapi.server({
        port: 5000,
        host: "localhost",
    });

    await server.start();
    console.log(`server berjalan pada ${server.info.uri}`);
};

init();

// Hapi.server() digunakan untuk membuat server http
// Parmeternya ServerOption, isinya konfigurasi dari server yang akan dibuat, port dan host
// server.start() digunakan untuk menjalankan server. karena secara async maka cara menjalankannya dengan menambahkan await
// server.info.uri digunakan untuk melihat alamat lengkap dan port tempat server dijalankan