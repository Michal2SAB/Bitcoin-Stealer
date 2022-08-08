3.0.0 / 2018-06-05
------------------
- Drop support for Node versions less than v6
- Add support for ZCash and other coins with multibyte public versions

2.0.0 / 2016-04-27
------------------
- upgraded from [`ecurve`](https://www.npmjs.com/package/ecurve) to [`secp256k1`](https://www.npmjs.com/package/secp256k1) (via `eckey` upgrade).

1.4.0 / 2015-04-20
------------------
- JavaScript Standard Style
- support [coininfo](https://github.com/cryptocoinjs/coininfo) objects without having to specify `versions`
- added method `addressToHash()`
- brought back `README` from http://cryptocoinjs.com

1.3.0 / 2014-09-29
------------------
* upgraded `"eckey": "^0.7.0"` to `"eckey": "^0.8.0"` (which upgraded ecurve from 0.8.0 to 1.0.0; removed superflous params)

1.2.0 / 2014-06-30
------------------
* upgraded `"coinstring": "^1.0.1"` to `"coinstring": "^2.0.0"`
* added `crypto-browserify` for Browserify build and `make browser-test`

1.1.0 / 2014-06-11
------------------
* upgraded `"eckey": "^0.6.0"` to `"eckey": "^0.7.0"`

1.0.0 / 2014-06-07
-------------------------
* added `mochify` as a dev dep
* removed semicolons per http://cryptocoinjs.com/about/contributing/#semicolons
* removed `terst` and moved to `assert`
* upgraded `"eckey": "~0.4.0"` to `"eckey": "^0.6.0"`
* deleted fields `pubKeyHash` and alias `publicHash` because they're now present in inherited `ECKey`
* upgraded `"coinstring": "~0.2.0"` to `"coinstring": "^1.0.1"`
* upgraded `"secure-random": "~0.2.0"` to `"secure-random": "^1.0.0"`
* removed `CoinKey.compressByDefault`, default is now `true`
* removed ability for `CoinKey` constructor to generate random key when `privateKey` aren't passed
* removed `binstring` dev dep
* added Travis CI
* added Coveralls
* added new class method `createRandom()`
* changed constructor signature from `CoinKey([privateKey], [compresssed], [versions])` to `CoinKey(privateKey, [versions])`

0.1.0 / 2014-03-10
------------------
* added method `fromWif()`
* upgraded to `coinstring@0.2.x` => `decode()` method changed
* fixed bug when bytes wasn't passed, it should generate a private key

0.0.1 / 2014-03-09
------------------
* initial release
