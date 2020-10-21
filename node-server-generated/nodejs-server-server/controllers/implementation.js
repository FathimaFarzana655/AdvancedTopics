const request = require('request')
function generateToken(){
    request.post(
      'https://anypoint.mulesoft.com/accounts/login',
      {
        json: {
        "username" : "FF2204",
        "password" : "Fathima000@"
    },
      },
      (error, res, body) => {
        if (error) {
          console.error(error)
          return
        }
        console.log(`statusCode: ${res.statusCode}`)
        console.log(body)
      }
    )
}

function test(){
    console.log("Hellooo world")
}
    
module.exports={generateToken,test}