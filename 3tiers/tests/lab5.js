var counter = 0;

while (counter < 5) {

  let ctn = counter;

  setTimeout(() => {
    console.log(ctn);
  }, 1000 * ctn);
  
  counter++;
}