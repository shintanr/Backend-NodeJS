// ketika melakukan perminataan POST atau PUT, data akan disimpan pada body request. data bisa berupa format text, JSON, berkas gambar, dll.
// data dalam body di dapatkan dengan teknik stream dengan eventEmitter

// constoh untuk mendapatkan data body

const requestListener = (request, response) => {
    let body = [];

    request.on("data", (chunk) => {
        // chunk adalah potongan data
        body.push(chunk);
    });

    request.on("end", () => {
        body = Buffer.concat(body).toString(); // ini digunakan untuk mengubah variabel body menjadi string
    });
};

// deklarasi variabel body dan inisialisasi dengan nol, untuk menampung buffer pada stream
// buffering adalah metode menyimpan data sementara di area memori saat memproses data lainnya yang tersisa. Sedangkan spooling adalah metode menyimpan data sementara di area memori sehingga perangkat atau program dapat menggunakannya sementara.
//