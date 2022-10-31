function isPrime(n){
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if(n % i === 0){
        return false;
      }
    };
  
    if(n !== Math.round(n)){
      return false;
    } else if(n < 2){
      return false;
    } else {
      return true;
    }
  }
  console.log(isPrime(8))
  