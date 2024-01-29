import fs from "node:fs";

const rename = async () => {
  fs.rename("./files/wrongFilename.txt", "./files/properFilename.md", (err) => {
    if (err) throw new Error("FS operation failed");
  });
};
await rename();
