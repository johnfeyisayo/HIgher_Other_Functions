function randomGame(){

    function counter(){
      let count = 0;
      return function(){
          return ++count
      }
    }
    let gameCount = counter();

    function fn(){
      var randomNum = Math.random();
      if(randomNum > 0.75){
        console.log(gameCount());
          clearInterval(timerId);
      } else {
        gameCount()
      }
    }
    let  timerId = setInterval(fn, 1000);
  }
    console.log(randomGame())