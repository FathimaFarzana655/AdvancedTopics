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




function getIpsec(username,password,orgid,vpcId){
    
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
      }
    )
  })
}




function postIpsec(username,password,generated,orgid,vpcId){

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
      }
    )
  })
}
  
  
    

function getIpsecVpnId(username,password,orgid,vpcId,vpnId){
  
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
      }
    )
  })

}




function deleteIpsecVpnId(username,password,orgid,vpcId,vpnId){
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
      }
    )
  })

}

module.exports={getIpsec,postIpsec,getIpsecVpnId,deleteIpsecVpnId}