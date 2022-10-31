function find (array, callback){
    return array.find (function (value){
        if (callback(value))
        return value
    })
      }
      let result = find ([8,11,4,27], function(val){
      return val >= 10
      })
   console.log (result)