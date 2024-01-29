import { writeFile, existsSync } from "node:fs";
import { Buffer } from "node:buffer";

const create = async () => {
  const isExistFile = existsSync("./files/fresh.txt");

  const data = new Uint8Array(Buffer.from("I am fresh and young"));
  writeFile("./files/fresh.txt", data, (err) => {
    if (isExistFile) throw new Error("FS operation failed");
  });
};

await create();
