'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');
const {generateToken,test} = require('./implementation')

module.exports.ipsecGET = function ipsecGET (req, res, next) {
  
  Default.ipsecGET()
    .then(function (response) {
      console.log(response)
      test(response)
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ipsecIpsecVpnIdDELETE = function ipsecIpsecVpnIdDELETE (req, res, next) {
  var vpnId = req.swagger.params['vpnId'].value;
  Default.ipsecIpsecVpnIdDELETE(vpnId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ipsecIpsecVpnIdGET = function ipsecIpsecVpnIdGET (req, res, next) {
  var vpnId = req.swagger.params['vpnId'].value;
  Default.ipsecIpsecVpnIdGET(vpnId)
    .then(function (response) {
      console.log(response)
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ipsecPOST = function ipsecPOST (req, res, next) {
  var generated = req.swagger.params['generated'].value;
  Default.ipsecPOST(generated)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
