const rotationArray = ["\r|   ",'\r/   ','\r-   ','\r\\   ',"\r|   ",'\r/   ','\r-   ','\r\\   ',"\r|   ","\n"];

const spinner2 = () =>{
  let delay = 100;
  for (const e of rotationArray) {
    setTimeout(() => {
      process.stdout.write(e); //references each index in rotationArray and executes the overwriting order or "animation"
    },delay);
    delay += 200;
  }
};

spinner2(rotationArray);