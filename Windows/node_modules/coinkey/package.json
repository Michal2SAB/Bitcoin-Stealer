{
  "name": "coinkey",
  "version": "3.0.0",
  "description": "JavaScript component for private keys, public keys, and addresess for crypto currencies such as Bitcoin, Litecoin, and Dogecoin",
  "keywords": [
    "cryptography",
    "crypto",
    "bitcoin",
    "litecoin",
    "elliptical",
    "curve"
  ],
  "license": "MIT",
  "devDependencies": {
    "coininfo": "^0.3.1",
    "coveralls": "^2.10.0",
    "istanbul": "^0.2.10",
    "mocha": "*",
    "mocha-lcov-reporter": "0.0.1",
    "mochify": "^2.8.1",
    "standard": "*"
  },
  "repository": {
    "url": "https://github.com/cryptocoinjs/coinkey",
    "type": "git"
  },
  "main": "./lib/coinkey.js",
  "dependencies": {
    "coinstring": "^2.0.0",
    "eckey": "^1.0.0",
    "inherits": "^2.0.1",
    "secure-random": "^1.0.0"
  },
  "scripts": {
    "browser-test": "mochify --wd -R spec",
    "test": "standard && mocha",
    "unit": "./node_modules/.bin/mocha",
    "coverage": "./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",
    "coveralls": "npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"
  }
}
