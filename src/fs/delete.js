import { unlink } from "node:fs";

const remove = async () => {
  unlink("./files/fileToRemove.txt", (err) => {
    if (err) throw new Error("FS operation failed");
  });
};
await remove();
