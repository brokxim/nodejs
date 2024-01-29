import { readdir } from "node:fs";

const list = async () => {
  await readdir("./files", (err, data) => {
    if (err) throw new Error("FS operation failed");
    console.log(data);
  });
};

await list();
