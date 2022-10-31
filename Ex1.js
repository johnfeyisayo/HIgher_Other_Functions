function countdown(num) {
    let startNumber = num;
    let fn = function () {
      startNumber--;
      if (startNumber === 0) {
        clearInterval(timerId);
        console.log("DONE!");
      } else {
        console.log(startNumber);
      }
    };
  
    let timerId = setInterval(fn, 1000);
  }
  countdown (5);