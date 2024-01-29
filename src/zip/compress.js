import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
const gzip = createGzip();
const source = createReadStream("./files/fileToCompress.txt");
const destination = createWriteStream("./files/archive.gz");

const compress = async () => {
  source.pipe(gzip).pipe(destination);
  console.log("compressed done");
};

await compress();
