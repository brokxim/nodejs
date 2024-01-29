import fs from "node:fs";

const write = async () => {
  const writableStream = fs.createWriteStream("./files/fileToWrite.txt", {
    encoding: "utf8",
  });
  process.stdin.on("data", (data) => {
    const info = data.toString().trim();
    writableStream.write(info);
  });
};

await write();
