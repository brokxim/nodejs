import fs from "node:fs";
import { createHash } from "node:crypto";

const calculateHash = async () => {
  const readableStream = fs.createReadStream(
    "./files/fileToCalculateHashFor.txt",
    { encoding: "utf8" }
  );
  const hashedData = readableStream.on("readable", (chunk) => {
    console.log(
      createHash("sha256").update(`${readableStream.read()}`).digest("hex")
    );
    readableStream.destroy();
  });
  return hashedData;
};
await calculateHash();
