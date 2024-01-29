import fs from "node:fs";
import cluster from "cluster";
// import numCPUs from ('os').cpus().length;
import echoInput from "./files/script.js";

const spawnChildProcess = async (args) => {
  if (cluster.isPrimary) {
    // for (let i = 0; i < numCPUs; ++i) {
    const customId = 100;
    const worker = cluster.fork({ workerId: customId });
    worker.send(args);
    worker.on("message", (msg) => {
      console.log("This is message from child process" + msg);
    });
    //    }
  } else {
    // echoInput();
    process.stdin.write(args);
  }
};

// Put your arguments in function call to test this functionality
spawnChildProcess("someArgument1");
