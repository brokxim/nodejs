import fs from "node:fs";
const read = async () => {
  const readableStream = fs.createReadStream("./files/fileToRead.txt", {
    encoding: "utf8",
  });

  readableStream.on("readable", (chunk) => {
    process.stdout.write(`${readableStream.read()}`);
    readableStream.destroy();
  });
};

await read();
