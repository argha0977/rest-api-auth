/**
 * Auhorization key Generator
 */
const otpgen = require('@argha0277/otp-generator');
const common = require('./common');
const { base64encode, base64decode } = require('nodejs-base64');

 module.exports = {
     /**
      * Generate a random authentication key, user id & secret key
      */
     generate: function () {
         //Generate random numeric user id and password
         var numUserid = otpgen.generate(common.userIdLength);
         var numPassword = otpgen.generate(common.passwordLength);
         //Convert numeric user id and password to alphanumeric.
         var userid = common.numToText(numUserid);
         var password = common.numToText(numPassword);
         //Concate userid & password with a :
         var generatedStr = userid + ':' + password;
         //Generate Base64 encoded Key
         var authKey = base64encode(generatedStr);
         var result = {
             clientId: userid,
             secretKey: password,
             authKey: authKey
         };
         return result;
     },

     /**
      * 
      * @param {*} keyJson Key Json containing auth key, user id & secret key
      */
     verify(keyJson) {
        //Convert Base64 authKey to Normal string
        authKeyStr = base64decode(keyJson.authKey);
        if(typeof(authKeyStr) == 'string') {
            splittedAuthKey = authKeyStr.split(':');
            if(splittedAuthKey.length == 2) {
                if (splittedAuthKey[0] == keyJson.clientId && splittedAuthKey[1] == keyJson.secretKey) return true;
                else return false;
            }
            return false;
        }
        else return false;
     }
 }