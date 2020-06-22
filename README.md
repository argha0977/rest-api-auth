#@argha0277/rest-api-auth

> '@argha0277/rest-api-auth' is a REST API Authrization key generator and validator.



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
var otpgen = require('@argha0277/rest-api-auth')
```

```js
var otp = otpgen.generate(4);

```
### generate(digis)

**Arguments**

* `digits` - Number of digits in OTP. Default length is 4.

```js
var otpgen = require('@argha0277/rest-api-auth')

var otp = otpgen.generateWithSeed(4, 541274896325);

```
### generate(length, seed)

**Arguments**

* `digits` - Number of digits in OTP. Default length is 4.
* `seed` - A numeric seed.

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
