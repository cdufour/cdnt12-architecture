var counter = 0;

while (counter < 5) {

  // outer scope
  (function(ctn) {

    //var ctn = counter;
    setTimeout(() => {
      console.log(ctn);
    }, 1000);
  
  })(counter)

  //console.log(counter);
  counter++;
}