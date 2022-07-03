const fs = require("fs");

const { resolve } = require("path");

const readableStream = fs.createReadStream(resolve(__dirname, "./input.txt"), { highWaterMark: 15 });

const writableStream = fs.createWriteStream(resolve(__dirname, "output.txt"));

const readableStreamListener = () => {
    try {
        value = readableStream.read();
        if (value != null) writableStream.write(`${value}\n`);
    } catch (error) {
        console.log(error);
    }
};

const endStreamListener = () => {
    writableStream.end();
};

readableStream.on("readable", readableStreamListener);

readableStream.on("end", endStreamListener);