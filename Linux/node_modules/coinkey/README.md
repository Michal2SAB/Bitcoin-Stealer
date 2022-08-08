coinkey
=======

[![Version](http://img.shields.io/npm/v/coinkey.svg)](https://www.npmjs.org/package/coinkey)
[![build status](https://secure.travis-ci.org/cryptocoinjs/coinkey.png)](http://travis-ci.org/cryptocoinjs/coinkey)
[![Coverage Status](https://img.shields.io/coveralls/cryptocoinjs/coinkey.svg)](https://coveralls.io/r/cryptocoinjs/coinkey)

JavaScript component for private keys, public keys, and addresses for crypto currencies such as Bitcoin, Litecoin, and Dogecoin. Works
in both Node.js and the browser.



Package Info
------------
- github: [https://github.com/cryptocoinjs/coinkey](https://github.com/cryptocoinjs/coinkey)
- tests: [https://github.com/cryptocoinjs/coinkey/tree/master/test](https://github.com/cryptocoinjs/coinkey/tree/master/test)
- issues: [https://github.com/cryptocoinjs/coinkey/issues](https://github.com/cryptocoinjs/coinkey/issues)
- license: **MIT**
- versioning: **SemVer**


Installation
------------

    npm i --save coinkey


Usage
-----

### Common Use Cases

### Generate a Bunch of Bitcoin Keys/Addresses

```js
var CoinKey = require('coinkey')

var bitcoinKeys = []
for (var i = 0; i < 10; ++i) {
  // bitcoin supported by default
  bitcoinKeys.push(CoinKey.createRandom())
}
```


#### Generate a Bunch of Namecoin Keys/Addresses

```js
var CoinKey = require('coinkey')
// npm install --save coininfo
var ci = require('coininfo')

var namecoins = []
for (var i = 0; i < 10; ++i) {
  namecoins.push(CoinKey.createRandom(ci('NMC')))
}
```


#### Parse a Wallet Import Key and Determine Crypto Currency

```js
var CoinKey = require('coinkey')
var ci = require('coininfo')

var ck = CoinKey.fromWif('QVD3x1RPiWPvyxbTsfxVwaYLyeBZrQvjhZ2aZJUsbuRgsEAGpNQ2')

console.log(ck.privateKey.toString('hex')) // => c4bbcb1fbec99d65bf59d85c8cb62ee2db963f0fe106f483d9afa73bd4e39a8a
console.log(ck.publicAddress) // => DGG6AicS4Qg8Y3UFtcuwJqbuRZ3Q7WtYXv
console.log(ck.compressed) // => true
console.log(ck.versions.public === ci('DOGE').versions.public) // => true
```


#### Change to Testnet Later

```js
var CoinKey = require('coinkey')
var ci = require('coininfo')

var ck = new CoinKey(new Buffer('1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd', 'hex'))
console.log(ck.publicAddress) // => 16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS

//change to Testnet
ck.versions = ci('BTC-TEST')

console.log(ck.publicAddress) // => mkzgubTA5Ahi6BPSkE6MN9pEafRutznkMe
```


### API

#### CoinKey(privateKey, [versions])

Constructor function.

- **privateKey**: The private key bytes. Must be 32 bytes in length. Should be an `Array`, `Uint8Array`, or a `Buffer`.
- **versions**: An object that specifies the public and private key versions for addresses and wifs. Defaults to Bitcoin `mainnet`.

Keys are default set to `compressed` is `true`.

```js
var CoinKey = require('coinkey')
//npm install --save secure-random@1.x
var secureRandom = require('secure-random')

var bytes = secureRandom.randomBuffer(32)
var key1 = new CoinKey(bytes)
console.log(key1.compressed) // => true
```


### Properties


#### compressed

Inherited from [ECKey][eckey]. [eckey.compressed](http://cryptocoinjs.com/modules/currency/eckey/#compressed)


#### privateKey

Inherited from [ECKey][eckey]. [eckey.privateKey](http://cryptocoinjs.com/modules/currency/eckey/#privatekey)


#### privateExportKey

Inherited from [ECKey][eckey]. [eckey.privateExportKey](http://cryptocoinjs.com/modules/currency/eckey/#privateexportkey)


#### privateWif

Get the private WIF (Wallet Import Format).

```js
var CoinKey = require('coinkey')

var privateKeyHex = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd"

//Bitcoin WIF
var key = new CoinKey(new Buffer(privateKeyHex, 'hex'))
key.compressed = false
console.log(key.privateWif) // => 5Hx15HFGyep2CfPxsJKe2fXJsCVn5DEiyoeGGF6JZjGbTRnqfiD

//Litecoin WIF
var key = new CoinKey(new Buffer(privateKeyHex, 'hex'), {private: 0xB0, public: 0x30})
key.compressed = false
console.log(key.privateWif) // => 6uFjYQnot5Gtg3HpP87bp4JUpg4FH1gkkV3RyS7LHBbD9Hpt1na
```


#### publicKey

Inherited from [ECKey][eckey]. [eckey.publicKey](http://cryptocoinjs.com/modules/currency/eckey/#publickey)


#### publicAddress

Get the public address.

```js
var CoinKey = require('coinkey')

var privateKeyHex = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd"

// Bitcoin Address
var key = new CoinKey(new Buffer(privatKeyHex, 'hex'))
console.log(key.publicAddress) // => 16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS

// Litecoin Address
var key = new CoinKey(new Buffer(privateKeyHex, 'hex'), {private: 0xB0, public: 0x30})
console.log(key.publicAddress) // => 'LZyGd5dCPVkVUjA5QbpuUfMNgcmNDLjswH'
```


#### publicHash

Alias: `pubKeyHash`

Inherited from [ECKey][eckey]. [eckey.publicHash](http://cryptocoinjs.com/modules/currency/eckey/#publicHash)


#### publicPoint

Inherited from [ECKey][eckey]. [eckey.publicPoint](http://cryptocoinjs.com/modules/currency/eckey/#publicPoint)


#### toString()

Returns the string representation.

```js
var CoinKey = require('coinkey')

var privateKeyHex = "1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd"

//Litecoin Address
var key = new CoinKey(new Buffer(privateKeyHex, 'hex'), {private: 0xB0, public: 0x30})
console.log(key.toString())
// => T3e2me1BvRs95K7E8eQ8eha9oRPL1g2U6vmjE5px6RjzbUTvKZsf: LZyGd5dCPVkVUjA5QbpuUfMNgcmNDLjswH
```


### Methods

#### fromWif(wif, [versions])

Class method to create a `CoinKey` from a wif.

```js
var ck = CoinKey.fromWif('KwomKti1X3tYJUUMb1TGSM2mrZk1wb1aHisUNHCQXTZq5auC2qc3');
console.log(ck.compressed) // => true
console.log(ck.privateKey.toString('hex')) // => 1184cd2cdd640ca42cfc3a091c51d549b2f016d454b2774019c2b2d2e08529fd
console.log(ck.publicAddress) // => 1FkKMsKNJqWSDvTvETqcCeHcUQQ64kSC6s
```


Browser Support
---------------

Clone the repo:

    git clone https://github.com/cryptocoinjs/coinkey

Install Browserify

    npm install -g browserify

Nav to repo:

    cd coinkey

Install dependencies:

    npm install

Run browserify:

    browserify --standalone coinkey lib/coinkey.js > lib/coinkey.bundle.js

You can now drop `coinkey.bundle.js` in a `<script>` tag.


[eckey]: https://github.com/cryptocoinjs/eckey
[coinstring]: https://github.com/cryptocoinjs/coinstring


Hack on CoinKey
---------------

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
