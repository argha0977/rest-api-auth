/**
 * REST API Authorization module can be used to generate authorization key
 * for any REST API to protect against the unautorized access to the API 
 * routes.
 */

const keygen = require('./functions/keygenerator');
const keystore = require('./functions/keystore');
const common = require('./functions/common');

 module.exports = {
     /**
      * Generate an authorization key
      */
     generateKey: function() {
         //Generate key
        var result = keygen.generate();
        return result;
     },

     /**
      * Generate an authorization key and store it to a JSON file
      * @param {*} callback Callback function
      */
     generateKeyAndStore: function (callback) {
         //Generate key
         var result = keygen.generate();
         //Read Key store
         keystore.readKeys((keys) => {
             keys.push(result);
             //Write generated key to key store
             keystore.writeKeys(keys, (success) => {
                result.keystore = success;
                 callback(result);
             })
         });
     },

     /**
      * Verify authKey with user id & secretKey present in the parameter
      * @param {*} keyJson Key Json containing auth key, user id & secret key  
      */
     verifyKey(keyJson) {
        if(keyJson.userid && !keyJson.clientId) {
            keyJson.clientId = keyJson.userid;
            delete keyJson.userid;
        }
        return keygen.verify(keyJson);
     },
     
     /**
      * Verify authKey with user id & secretKey present in key store
      * @param {string} key Key in Base64 format
      * @param {*} callback Callback function
      */
     verifyKeyFromStore(key, callback) {
         //Read Key store
         keystore.readKeys((keys) => {
             //Search Kay
            var index = common.findItem(keys, 'authKey', key);
            if(index >= 0) {
                //Verify Key
                var result = keygen.verify(keys[index]);
                callback(result);
            }
            else callback(false);
         });
     },

     /**
      * Get all keys present in key store
      * @param {*} callback Callback function
      */
     getKeysFromStore(callback) {
         //Read Key store
         keystore.readKeys((keys) => {
             callback(keys);
         });
     },

     /**
      * Get a key JSON present in key store
      * @param {string} key Key in Base64 format
      * @param {*} callback Callback function
      */
     getKeyJsonFromStore(key, callback) {
         //Read Key store
         keystore.readKeys((keys) => {
             //Search Kay
             var index = common.findItem(keys, 'authKey', key);
             if (index >= 0) callback(keys[index]);
             else callback(undefined);
         });
     },

     /**
      * Remove a key from key store
      * @param {string} key Key in Base64 format
      * @param {*} callback Callback function
      */
     removeKeyFromStore(key, callback) {
         //Read Key store
         keystore.readKeys((keys) => {
             //Search Kay
             var index = common.findItem(keys, 'authKey', key);
             if (index >= 0) {
                 //Remove Key from array
                keys.splice(index, 1);
                 //Write remaining keys to key store
                 keystore.writeKeys(keys, (success) => {
                     callback(success);
                 })
             }
             else callback(false);
         });
     }

 }

