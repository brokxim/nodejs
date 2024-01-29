import { mkdir, readdir, copyFile, constants } from "node:fs";

const copy = async () => {
  mkdir("./files_copy", { recursive: true }, (err) => {
    if (err) throw new Error("FS operation failed");
  });

  readdir("./files", (err, data) => {
    if (err) throw new Error("FS operation failed");
    for (let i = 0; i < data.length; i++) {
      copyFile(
        `./files/${data[i]}`, //internal files can be reused to get filenames
        `./files_copy/${data[i]}`,
        constants.COPYFILE_EXCL, // checking if the current file exists
        (err) => {
          if (err) throw new Error("FS operation failed");
        }
      );
    }
  });
};
await copy();
