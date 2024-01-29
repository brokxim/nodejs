import { Worker } from "node:worker_threads";
import os from "os";
const cpuCount = os.cpus().length;
const performCalculations = async () => {
  let numToWorker = 10;
  let result,
    allResult = [];
  for (let i = 0; i < cpuCount; i++) {
    const worker = new Worker("./worker.js");
    worker.postMessage(numToWorker);
    worker.on("message", (data) => {
      result = data;
      console.log("result", result);

      allResult.push(result);
    });
    worker.on("error", (err) => console.log(`status : error, data :${null}`));
    numToWorker++;
  }
  console.log("allResult", allResult);
};
await performCalculations();

// result = { status: "resolved", data: data };
