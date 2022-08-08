1.0.0 / 2016-03-26
------------------
- upgraded to `secp256k1`. [#15][#15]

0.8.0 / 2014-09-29
------------------
- updated `"ecurve": "^0.8.0"` to `"ecurve": "^1.0.0"`

0.7.0 / 2014-06-11
------------------
* updated `"ecurve": "^0.6.0"` to `"ecurve": "^0.8.0"`
* removed `terst` for `assert`

0.6.0 / 2014-06-03
------------------
* added field `pubKeyHash` and alias `publicHash`
* removed semicolons (CryptoCoinJS should no longer use them)

0.5.0 / 2014-06-03
------------------
* add TravisCI
* add Coveralls
* upgraded `secure-random@~0.2.1` to `secure-random@^1.0.0` dev dep
* removed `ecurve-names` dep, functionality is now present in `ecurve`
* upgraded from `ecurve@~0.3.x` to `ecurve@^0.6.0`
* removed static field `compressByDefault`
* field `compressed` is now set to `true` by default
* upgraded `terst` dev dep to `0.2.0`
* upgraded `bigi@~0.2.0` to `bigi@^1.1.0`
* add testling

0.4.2 / 2014-04-17
------------------
* bugfix: fixed `compressed` when `new` isn't used with the constructor. #12

0.4.1 / 2014-04-14
------------------
* bugfix: fixed input when `new` isn't used with the constructor. #11, #9

0.4.0 / 2014-03-09
------------------
* Dropped sha256 and ripemd160 deps. Upgraded to crypto-hashing library.
* removed function wrapper
* Changed the way the constuctor works. Only supports input types of `Array`, `Buffer`, or `Uint8Array`. Does NOT randomly generate a private key anymore.
* added `publicKey` property
* ~~added `pubKeyHash`/`publicHash` property~~
* added `publicPoint`, removed `getPubPoint()`
* removed `getPub()`, use `publicKey` instead
* removed `getPubKeyHash()`, use `publicHash` or `pubKeyHash` instead
* removed `sign()` and `verify()`, methods can be accessed from [ecdsa](https://github.com/cryptocoinjs/ecdsa)
* added `privateExportKey`
* removed `getExportedPrivateKey`, note that `getExportedPrivateKey` was essentially just a way to get WIF
* removed `decodeString()`, use package [coinstring][coinstring] in its place
* removed `getBitcoinAddress()`, use package [coinstring][coinstring] in its place
* removed `setCompressed`, use `compressed` property instead
* removed deps: `ecdsa`, `convert-hex`, `btc-address`, `bs58`
* updated deps: `ecurve` and `ecurve-names`
* removed `pubKeyHash` property, removes dependency upon `crypto-hashing`
* removed dep `crypto-hashing`

0.3.0 / 2014-02-03
------------------
* Removed bower and component support. Closes #8
* Upgraded version number so that `cryptocoin` could install. Changes in `0.2.1` could qualify for a `0.3.0`.

0.2.1 / 2014-01-23
------------------
* Update dependency package names/versions

0.2.0 / 2013-12-07
------------------
* added `recoverPubKey()` from package `ecdsa`
* updated to `ecdsa` `0.2.0`
* [remiq](https://github.com/remiq) fixed `getExportedPrivateKey()`, see: https://github.com/cryptocoinjs/eckey/pull/2
* updated name of deps: `bigi` and `bs58`

0.1.1 / 2013-12-05
------------------
* typo in `toString()` method. Closes #1

0.1.0 / 2013-11-20
------------------
* changed package name
* removed AMD support

0.0.1 / 2013-11-12
------------------
* initial release

[coinstring]: https://github.com/cryptocoinjs/coinstring

<!--- secp256k1 instead ecurve -->
[#14]: https://github.com/cryptocoinjs/eckey/pull/14
<!--- Private key [1, n - 1] range -->
[#13]: https://github.com/cryptocoinjs/eckey/issues/13
<!--- Pass the `compressed` flag when used without `new` -->
[#12]: https://github.com/cryptocoinjs/eckey/pull/12
<!--- Fixed variable name -->
[#11]: https://github.com/cryptocoinjs/eckey/pull/11
<!--- Repository description -->
[#10]: https://github.com/cryptocoinjs/eckey/issues/10
<!--- Input is undefined -->
[#9]: https://github.com/cryptocoinjs/eckey/issues/9
<!--- Retarget for just NodeJS and Browserify -->
[#8]: https://github.com/cryptocoinjs/eckey/issues/8
<!--- Transition from convert-hex to binstring -->
[#7]: https://github.com/cryptocoinjs/eckey/issues/7
<!--- More explicit setting of testnet / prod net -->
[#6]: https://github.com/cryptocoinjs/eckey/issues/6
<!--- Adding checksum checks in ECkey decode strings -->
[#5]: https://github.com/cryptocoinjs/eckey/pull/5
<!--- update deps - makes eckey npm installable -->
[#4]: https://github.com/cryptocoinjs/eckey/pull/4
<!--- doesn't install: npm ERR! 404 'cryptocoin-base58' is not in the npm registry -->
[#3]: https://github.com/cryptocoinjs/eckey/issues/3
<!--- Fixed getExportedPrivateKey() returning uncompressed private key -->
[#2]: https://github.com/cryptocoinjs/eckey/pull/2
<!--- fix code typo [bug] -->
[#1]: https://github.com/cryptocoinjs/eckey/issues/1
