const http = require("http");

const requestListener = (request, response) => {
    // response.setHeader("Content-Type", "text / html");
    response.setHeader("Content-Type", "aplication/json");
    response.setHeader("X-Powered-By", "NodeJS");
    response.statusCode = 200;

    const { method, url } = request;

    if (url === "/") {
        if (method === "GET") {
            response.statusCode = 200;
            response.end(
                JSON.stringify({
                    message: "Ini adalah homepage",
                })
            );
        } else {
            response.statusCode = 400;
            response.end(
                JSON.stringify({
                    message: `Halaman tidak dapat diakses dengan ${method} request`,
                })
            );
        }
    } else if (url === "/about") {
        if (method === "GET") {
            response.setCode = 200;
            response.end(
                JSON.stringify({
                    message: "Halo! ini adalah halaman about",
                })
            );
        } else if (method === "POST") {
            let body = [];

            request.on("end", () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(
                    JSON.stringify({
                        message: `Halo, ${name}! Ini adalah halaman about`,
                    })
                );
            });
        } else {
            response.setCode = 400;
            response.end(JSON.stringify({ message: `Halaman tidak dapat diakses dengan ${method} request` }));
        }
    } else {
        // response.end("<h1>Halaman tidak ditemukan</h1>");
        response.status = 404;
        response.end(
            JSON.stringify({
                message: "Halaman tidak ditemukan!",
            })
        );
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server berjalan pada htt[://${host}:${port}]`);
});