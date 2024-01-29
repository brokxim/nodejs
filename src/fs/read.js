import { readFile } from "node:fs";

const read = async () => {
  readFile("./files/fileToRead.txt", "utf-8", function (err, data) {
    if (err) throw new Error("FS operation failed");
    console.log(data);
  });
};

await read();
