const request = require('request')


function generateToken(username,password,cb){
    request.post(
        'https://anypoint.mulesoft.com/accounts/login',
        {
          json: {
          "username" : username ,
          "password" : password
      },
        },
        (error, res, body) => {
          if (error) {
            console.error(error)
            return
          }
          console.log(`statusCode: ${res.statusCode}`)
          cb(body)

        }
      )
      
}




function getIpsec(username,password,orgid,vpcId,cb){
    
  generateToken(username,password,(body)=>{
    request.post({
      "headers": { "content-type": "application/json","Authorization": `Bearer ${body.access_token}` },
      "url": `
      https://anypoint.mulesoft.com/cloudhub/api/organizations/${orgid}/vpcs/${vpcId}/ipsec`
  },
      
      (error, res, body) => {
        if (error) {
          console.error(error)
          return
        }
        console.log(`statusCode: ${res.statusCode}`)
        console.log(body)
        if(cb){
          cb(body,res.statusCode)
        }
      }
    )
  })
}




function postIpsec(username,password,generated,orgid,vpcId,cb){

  generateToken(username,password,(body)=>{
    request.post({
      "headers": { "content-type": "application/json","Authorization": `Bearer ${body.access_token}` },
      "url": `https://anypoint.mulesoft.com/cloudhub/api/organizations/${orgid}/vpcs/${vpcId}/ipsec`,
      "body": JSON.stringify(generated)
  },
      
      (error, res, body) => {
        if (error) {
          console.error(error)
          return
        }
        console.log(`statusCode: ${res.statusCode}`)
        console.log(body)
        if(cb){
          cb(body,res.statusCode)
        }
      }
    )
  })
}
  
  
    

function getIpsecVpnId(username,password,orgid,vpcId,vpnId,cb){
  
  generateToken(username,password,(body)=>{
    request.post({
      "headers": { "content-type": "application/json","Authorization": `Bearer ${body.access_token}` },
      "url": `https://anypoint.mulesoft.com/cloudhub/api/organizations/${orgid}/vpcs/${vpcId}/ipsec/ipsec/${vpnId}`
  },
      
      (error, res, body) => {
        if (error) {
          console.error(error)
          return
        }
        console.log(`statusCode: ${res.statusCode}`)
        console.log(body)
        if(cb){
          cb(body,res.statusCode)
        }
      }
    )
  })

}




function deleteIpsecVpnId(username,password,orgid,vpcId,vpnId,cb){
  generateToken(username,password,(body)=>{
    request.post({
      "headers": { "content-type": "application/json","Authorization": `Bearer ${body.access_token}` },
      "url": `https://anypoint.mulesoft.com/cloudhub/api/organizations/${orgid}/vpcs/${vpcId}/ipsec/ipsec/${vpnId}`
  },
      
      (error, res, body) => {
        if (error) {
          console.error(error)
          return
        }
        console.log(`statusCode: ${res.statusCode}`)
        console.log(body)
        if(cb){
          cb(body,res.statusCode)
        }
      }
    )
  })

}

module.exports={getIpsec,postIpsec,getIpsecVpnId,deleteIpsecVpnId}