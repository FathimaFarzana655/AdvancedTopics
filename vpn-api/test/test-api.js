const { doesNotMatch } = require('assert');
const assert = require('assert');
const {getIpsec,postIpsec,getIpsecVpnId,deleteIpsecVpnId} = require('../controllers/implementation.js');

describe('the get list of vpc function', ()=>{
    //this.timeout(10000)
    it("list all vpn function TEST case", (done)=>{
        
        const code = getIpsec('FF2204','Fathima000@','hgtyhujnhy7897654erft','ji89765rdsq234e5rft', (body, statuscode)=>{
            //assert.strictEqual(statuscode , 200)
            //done ();
            //console.log(body)
            //done();
            if(statuscode != 200)
            {
                done("Test Failed")
            }
            else
            done();
        })  
    })



    it("configure vpn function TEST case", (done)=>{

        const tempbody = {
            "name": "myDatacenterVpn",
            "remoteAsn": 65000,
            "remoteIpAddress": "100.100.100.100",
            "remoteNetworks": [],
            "tunnelConfigs": [
              {
                "psk": "23847329fn3u__...",
                "ptpCidr": "169.254.12.0/30"
              },
              {
                "psk": "nsdkjfnsauf23f2linf",
                "ptpCidr": "169.254.12.4/30"
              }
            ]
          }
            
        const code = postIpsec('FF2204','Fathima000@',tempbody,'hgtyhujnhy7897654erft','ji89765rdsq234e5rft', (body, statuscode)=>{
                    
    
            if(statuscode != 200)
            {
                done("Test Failed")
            }
            else
            done();
        })  
    })
    
    it("get a single vpn function TEST case", (done)=>{
            
        const code = getIpsecVpnId('FF2204','Fathima000@','hgtyhujnhy7897654erft','ji89765rdsq234e5rft','xdfgy765432wsdcvbnjko', (body, statuscode)=>{
            
            if(statuscode != 200)
            {
                done("Test Failed")
            }
            else
            done();
        })  
    })
    
    it("delete vpn function TEST case", (done)=>{
            
        const code = deleteIpsecVpnId('FF2204','Fathima000@','hgtyhujnhy7897654erft','ji89765rdsq234e5rft','xdfgy765432wsdcvbnjko', (body, statuscode)=>{
            
            if(statuscode != 204)
            {
                done("Test Failed")
            }
            else
            done();
        })  
    })


})



