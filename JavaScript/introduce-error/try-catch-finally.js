try {
    console.log("Awal blok try");
    errorCode;
    console.log("Akhir blok try");
} catch (error /*nama parameter bebas */ ) {
    console.log("Baris ini diabaikan");
} finally {
    console.log("Akan tetap dieksekusi");
}