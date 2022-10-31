function findIndex (array, callback){
    return array.findIndex (function (value){
      if (callback(value))
      return value
    })
  }
    let result = findIndex ([8,11,4,27], function(val){
  return  val >= 10
    })
    console.log (result)