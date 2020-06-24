const auth = require('./index');

//console.log(auth.generateKey());
/* auth.generateKeyAndStore((result) => {
    console.log(result);
}) */

//console.log(auth.verifyKey({ "userid": "95D4725G9357", "secretKey": "92540603T935728", "authKey": "U1A5Mlk5MzQwMjQ6MzdQNTg0NFg0MkszOQ==" }));
/* auth.verifyKeyFromStore('OTVENDcyNUc5MzU3OjkyNTQwNjAzVDkzNTcy==', (result) => {
    console.log(result);
}) */

/* auth.getKeysFromStore((keys) => {
    console.log(keys);
}) */

/* auth.getKeyJsonFromStore('U1A5Mlk5MzQwMjQ6MzdQNTg0NFg0MkszOQ==', (result) => {
    console.log(result);
}) */

auth.removeKeyFromStore('U1A5Mlk5MzQwMjQ6MzdQNTg0NFg0MkszOQ==', (result) => {
    console.log(result);
    auth.getKeysFromStore((keys) => {
        console.log(keys);
    })
})