// fungsi dari paremeter h, untuk menetapkan status kode respons, menetapkan header response, content-type, content length, dll

// parameter h digunakan agar bisa mengubah nilai dari status response

// detaild notation

// const handler = (request, h) => {
//     const response = h.response("success");
//     response.type("text/plain");
//     response.header("X-Custom", "some-value");
//     return response;
// };

// // chained notation
// const handler = (request, h) => {
//     return h.response("success").type("text/plain").header("X-Custom", "some-value");
// };