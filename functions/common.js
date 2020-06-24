/**
 * Contains common functions and variables
 */

var userIdLength = 14;
var passwordLength = 16;
var fileName = 'keys.json';

module.exports = {
    /**
     * Pad 0 to the left or start of a string  
     * @param {string} padString String to be padded
     * @param {number} length Total length after padding
     */
    leftPad: function (padString, length) {
        var str = padString.toString();
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    },

    /**
     * Convert an numeric data to an alpha numeric data
     * @param {string} numData Numeric data
     */
    numToText: function (numData) {
        var alphaNumData = '';
        var tnumData = numData.toString();
        for (var i = 0; i < tnumData.toString().length; i += 2) {
            var num = tnumData.substr(i, 2);
            if (num >= 7 && num <= 12) {
                num *= 10;
            }
            if (num >= 65 && num <= 90) {
                alphaNumData += String.fromCharCode(num);
            }
            else if (num >= 97 && num <= 122) {
                alphaNumData += String.fromCharCode(num);
            }
            else {
                alphaNumData += num;
            }
        }
        return alphaNumData;
    },

    /**
     * Search a JSON array for a particular item
     * @param {*} array Array to be searched
     * @param {string} key Key Attribute
     * @param {string} value Key Value
     */
    findItem(array, key, value) {
        for (var index = 0; index < array.length; index++) {
            if(array[index][key] ==  value) return index;
        }
        return -1;
    }
}

module.exports.userIdLength = userIdLength;
module.exports.passwordLength = passwordLength;
module.exports.fileName = fileName;