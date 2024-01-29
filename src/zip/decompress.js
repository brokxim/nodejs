import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";

const unzip = createUnzip();
const source = createReadStream("./files/archive.gz");
const destination = createWriteStream("./files/fileUnzip.txt");

const decompress = async () => {
  source.pipe(unzip).pipe(destination);
  console.log("decompressed done");
};

await decompress();
