 
function MockRequest(success, timeout=1000){

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if(success){
        resolve({"success": "It was gooood"});
      } else {
        reject({"message": "It was baaaaaaaad"})
      }
    }, timeout)
  })
}

module.exports = MockRequest