import { createInterface } from "node:readline";
const parseArgs = () => {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question(`What's your name? `, (name) => {
    const propName = name.split(" ").slice(0, 1).join("");
    const value = name.split(" ").slice(1).join("");
    console.log(
      `${propName
        .trim()
        .split("")
        .filter((q) => q !== "-")
        .join("")} is ${value}`
    );
    readline.close();
  });
};
parseArgs();
