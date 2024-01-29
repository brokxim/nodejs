import { Transform } from "node:stream";

const transform = async () => {
  return new Transform({
    transform(chunk, enc, callback) {
      process.stdin.on("data", (data) => {
        process.stdout.write(`${reverseData}`);
      });
      const reverseData = chunk.toString().trim().split("").reverse().join("");
      callback(null, reverseData);
    },
  });
};
const reverseData = await transform();
process.stdin.pipe(reverseData).pipe(process.stdout);
