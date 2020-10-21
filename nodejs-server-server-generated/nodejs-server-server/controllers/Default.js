'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');
const {getIpsec,postIpsec,getIpsecVpnId,deleteIpsecVpnId} = require('./implementation')

module.exports.ipsecOrgidVpcIdGET = function ipsecOrgidVpcIdGET (req, res, next) {
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  var orgid = req.swagger.params['orgid'].value;
  var vpcId = req.swagger.params['vpcId'].value;
  Default.ipsecOrgidVpcIdGET(username,password,orgid,vpcId)
    .then(function (response) {
      getIpsec(username,password,orgid,vpcId)
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ipsecOrgidVpcIdIpsecVpnIdDELETE = function ipsecOrgidVpcIdIpsecVpnIdDELETE (req, res, next) {
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  var orgid = req.swagger.params['orgid'].value;
  var vpcId = req.swagger.params['vpcId'].value;
  var vpnId = req.swagger.params['vpnId'].value;
  Default.ipsecOrgidVpcIdIpsecVpnIdDELETE(username,password,orgid,vpcId,vpnId)
    .then(function (response) {
      deleteIpsecVpnId(username,password,orgid,vpcId,vpnId)
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ipsecOrgidVpcIdIpsecVpnIdGET = function ipsecOrgidVpcIdIpsecVpnIdGET (req, res, next) {
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  var orgid = req.swagger.params['orgid'].value;
  var vpcId = req.swagger.params['vpcId'].value;
  var vpnId = req.swagger.params['vpnId'].value;
  Default.ipsecOrgidVpcIdIpsecVpnIdGET(username,password,orgid,vpcId,vpnId)
    .then(function (response) {
      getIpsecVpnId(username,password,orgid,vpcId,vpnId)
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ipsecOrgidVpcIdPOST = function ipsecOrgidVpcIdPOST (req, res, next) {
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  var orgid = req.swagger.params['orgid'].value;
  var vpcId = req.swagger.params['vpcId'].value;
  var generated = req.swagger.params['generated'].value;
  Default.ipsecOrgidVpcIdPOST(username,password,orgid,vpcId,generated)
    .then(function (response) {
      postIpsec(username,password,generated,orgid,vpcId)
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
