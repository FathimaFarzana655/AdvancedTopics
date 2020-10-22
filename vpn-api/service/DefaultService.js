'use strict';


/**
 *
 * username String 
 * password String 
 * orgid String 
 * vpcId String 
 * returns GetVpns
 **/
exports.ipsecOrgidVpcIdGET = function(username,password,orgid,vpcId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "4a6e3da830767b280a80ce33",
    "spec" : {
      "name" : "myDatacenterVpn",
      "remoteIpAddress" : "100.100.100.100",
      "routingType" : "STATIC",
      "remoteNetworks" : [ "10.5.0.0/16" ],
      "tunnelConfigs" : [ {
        "psk" : "LKvQAyV7DyR1Q7kZoIAymsqFOh3SWb2S",
        "ptpCidr" : "169.254.12.0/30"
      }, {
        "psk" : "q.NFQABcVnKLp2.zjR7Pw7YtH9gICJlt",
        "ptpCidr" : "169.254.12.4/30"
      } ]
    },
    "state" : {
      "vpnConnectionStatus" : "AVAILABLE",
      "createdAt" : "2017-01-01T00:00:01-0800",
      "bgpRoutes" : [ ],
      "staticRoutes" : [ {
        "remoteNetwork" : "10.5.0.0/16",
        "state" : "AVAILABLE"
      } ],
      "vpnTunnels" : [ {
        "acceptedRouteCount" : 1,
        "lastStatusChange" : "2018-01-13T16:30:07-0800",
        "localExternalIpAddress" : "50.112.49.102",
        "localPtpIpAddress" : "169.254.13.241",
        "remotePtpIpAddress" : "169.254.13.242",
        "psk" : "LKvQAyV7DyR1Q7kZoIAymsqFOh3SWb2S",
        "status" : "UP",
        "statusMessage" : ""
      }, {
        "acceptedRouteCount" : 1,
        "lastStatusChange" : "2018-01-13T16:30:07-0800",
        "localExternalIpAddress" : "34.216.124.13",
        "localPtpIpAddress" : "169.254.15.17",
        "remotePtpIpAddress" : "169.254.15.18",
        "psk" : "q.NFQABcVnKLp2.zjR7Pw7YtH9gICJlt",
        "status" : "DOWN",
        "statusMessage" : ""
      } ]
    }
  } ],
  "total" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * username String 
 * password String 
 * orgid String 
 * vpcId String 
 * vpnId String 
 * no response value expected for this operation
 **/
exports.ipsecOrgidVpcIdIpsecVpnIdDELETE = function(username,password,orgid,vpcId,vpnId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * username String 
 * password String 
 * orgid String 
 * vpcId String 
 * vpnId String 
 * returns GetVpn
 **/
exports.ipsecOrgidVpcIdIpsecVpnIdGET = function(username,password,orgid,vpcId,vpnId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "4a6e3da830767b280a80ce33",
  "spec" : {
    "name" : "myDatacenterVpn",
    "remoteAsn" : 65000,
    "localAsn" : 7224,
    "remoteIpAddress" : "100.100.100.100",
    "routingType" : "BGP"
  },
  "state" : {
    "vpnConnectionStatus" : "AVAILABLE",
    "createdAt" : "2017-01-01T00:00:01-0800",
    "bgpRoutes" : [ {
      "remoteNetwork" : "10.5.0.0/16",
      "state" : "ACTIVE"
    } ],
    "staticRoutes" : [ ],
    "vpnTunnels" : [ {
      "acceptedRouteCount" : 2,
      "lastStatusChange" : "2018-01-13T16:30:07-0800",
      "localExternalIpAddress" : "50.112.49.102",
      "localPtpIpAddress" : "169.254.13.241",
      "remotePtpIpAddress" : "169.254.13.242",
      "psk" : "LKvQAyV7DyR1Q7kZoIAymsqFOh3SWb2S",
      "status" : "UP",
      "statusMessage" : ""
    }, {
      "acceptedRouteCount" : 2,
      "lastStatusChange" : "2018-01-13T16:30:07-0800",
      "localExternalIpAddress" : "34.216.124.13",
      "localPtpIpAddress" : "169.254.15.17",
      "remotePtpIpAddress" : "169.254.15.18",
      "psk" : "q.NFQABcVnKLp2.zjR7Pw7YtH9gICJlt",
      "status" : "DOWN",
      "statusMessage" : ""
    } ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * username String 
 * password String 
 * orgid String 
 * vpcId String 
 * generated PostVpn  (optional)
 * no response value expected for this operation
 **/
exports.ipsecOrgidVpcIdPOST = function(username,password,orgid,vpcId,generated) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

