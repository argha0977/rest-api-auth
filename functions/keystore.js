/**
 * Read and Write keys in keystore(A JSON file)
 */

const fs = require('fs');
const common = require('./common');

module.exports = {
    /**
     * Kead key store file and return keys
     * @param {*} callback Callback function
     */
    readKeys: function(callback) {
        var keys = [];
        //Check existance of Keys file
        fs.exists(common.fileName, (exists) => {
            if(exists) {
                //Read Keystaote
                fs.readFile(common.fileName, (err, data) => {
                    if(err) callback(keys);
                    else {
                        keys = JSON.parse(data);
                        callback(keys);
                    }
                })
            }
            else callback(keys);
        })
    },

    /**
     * Write keys array in key store
     * @param {any} data Keys array
     * @param {*} callback Callback function
     */
    writeKeys: function(data, callback) {
        fs.writeFile(common.fileName, JSON.stringify(data), (err) => {
            if(err) callback(false);
            else callback(true);
        })
    }
}