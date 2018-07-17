const axios = require('axios')
const encode = require('nodejs-base64-encode');

const keys = require('../config/keys')

module.exports = () => {
  // Request URL
  // var hostName = 'https://app.sandbox.midtrans.com';

  // Request Headers
  const accept = 'application/json';
  const contentType = 'application/json';
  const authString = encode.encode(keys.serverKeyDev + ':', 'base64');
  const headers = {
    headers: {
      'Accept': accept,
      'Content-Type': contentType,
      'Authorization': 'Basic ' + authString
    }
  }

  return {
    getPaymentToken: async (req, res) => {
      const response = await axios.post(keys.sendboxDev + '/snap/v1/transactions', req.body, headers)
      res.send(response.data)
    }
  }

}
