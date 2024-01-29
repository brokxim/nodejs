// n should be received from main thread
import { parentPort } from "node:worker_threads";
const nthFibonacci = (n) => {
  return n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
};
const sendResult = () => {
  parentPort?.on("message", (num) => {
    return parentPort?.postMessage(nthFibonacci(num));
  });
};
sendResult();
//there are nthFibonacci computations
//nthFibonacci(17)=1,597
//nthFibonacci(16)=987
//nthFibonacci(15)=610
//nthFibonacci(14)=377
//nthFibonacci(13)=233
//nthFibonacci(12)=144
//nthFibonacci(11)=89
//nthFibonacci(10)=nthFibonacci(9)+nthFibonacci(8)=55
//nthFibonacci(9)=nthFibonacci(8)+nthFibonacci(7)=34
//nthFibonacci(8)=nthFibonacci(7)+nthFibonacci(6)=21
//nthFibonacci(7)=nthFibonacci(6)+nthFibonacci(5)=13
//nthFibonacci(6)=nthFibonacci(5)+nthFibonacci(4)=8
//nthFibonacci(5)=nthFibonacci(4)+nthFibonacci(3)=5
//nthFibonacci(4)=nthFibonacci(3)+nthFibonacci(2)=3
//nthFibonacci(3)=nthFibonacci(2)+nthFibonacci(1)=2
//nthFibonacci(2)=nthFibonacci(1)+nthFibonacci(0)=1
//nthFibonacci(1)=1
//nthFibonacci(0)=0
