const parseEnv = () => {
  const allEnv = Object.keys(process.env);
  let selectedEnv = [];
  for (let i = 0; i < allEnv.length; i++) {
    const theseDatas = allEnv[i].split("_")[0];
    if (theseDatas == "RSS") {
      selectedEnv.push(i);
    }
  }
  for (let j = 0; j < selectedEnv.length; j++) {
    const currentEnv = allEnv[selectedEnv[j]];
    console.log(`${currentEnv} = ${process.env[currentEnv]}`);
  }
};
parseEnv();
