#@argha0277/rest-api-auth

> '@argha0277/rest-api-auth' is a REST API Authorization key generator and validator.



## Index
* [Install](#install)
* [Usage](#usage)
* [Test](#test)
* [License](#license)

## Install

```bash
npm i @argha0277/rest-api-auth --save
```

## Usage

```js
var auth = require('@argha0277/rest-api-auth')
```

### generateKey()

It will generate and return a JSON containing authirization key, user id and a secret key.

```js
var result = auth.generateKey();


```
### generateKeyAndStore(callback)

**Arguments**

* `callback` - A callback function.

It will generate an authorization key and store it in a key store, and return a JSON containing authirization key, user id and a secret key.


```js

auth.generateKeyAndStore((result) => {
    console.log(result);
})


```
### verifyKey(keyJson)

**Arguments**

* `keyJson` - Key Json containing auth key, user id & secret key.


It will verify the authirization key with the user id and secret key. If verifification is successful returns true, otherwise returns false.

```js
var result = auth.verifyKey({ "userid": "95D4725G9357", "secretKey": "92540603T935728", "authKey": "U1A5Mlk5MzQwMjQ6MzdQNTg0NFg0MkszOQ==" })

```
### verifyKeyFromStore(key, callback)

**Arguments**

* `key` - A Base64 format key to be validated.
* `callback` - A callback function.

It will verify the authirization key with the keys present in the key store. If verifification is successful returns true, otherwise returns false.

```js

auth.verifyKeyFromStore('OTVENDcyNUc5MzU3OjkyNTQwNjAzVDkzNTcy==', (result) => {
    console.log(result);
})

```
### getKeysFromStore(callback)

**Arguments**

* `callback` - A callback function.

It will the list of keys present in the key store.


```js

auth.getKeysFromStore((keys) => {
    console.log(keys);
})


```
### getKeyJsonFromStore(key, callback)

**Arguments**

* `key` - A Base64 format key.
* `callback` - A callback function.

It will return a JSON containing authirization key, user id and a secret key if the key is present in key store.


```js

auth.getKeyJsonFromStore('U1A5Mlk5MzQwMjQ6MzdQNTg0NFg0MkszOQ==', (result) => {
    console.log(result);
})


```
### removeKeyFromStore(key, callback)

**Arguments**

* `key` - A Base64 format key.
* `callback` - A callback function.

It will the key is present in key store. If removal is successful returns true, otherwise returns false.

```js

auth.removeKeyFromStore('U1A5Mlk5MzQwMjQ6MzdQNTg0NFg0MkszOQ==', (result) => {
    console.log(result);
})

```
## Tests

```js
node test
```

## License
[MIT][license-url]

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-version-img]: https://badge.fury.io/js/%40argha0277%2Frest-api-auth.svg
[npm-version-url]: https://badge.fury.io/js/%40argha0277%2Frest-api-auth.svg
