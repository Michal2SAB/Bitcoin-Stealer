"use strict";

const CoinKey = require('coinkey')
const getRandomValues = require('get-random-values')
const fs = require('fs');

function generate() {
    let randArr = new Uint8Array(32);
    getRandomValues(randArr)
    
    let privateKeyBytes = []
    for (var i = 0; i < randArr.length; ++i)
      privateKeyBytes[i] = randArr[i]
    
    function toHexString(byteArray) {
        return Array.from(byteArray, function(byte) {
            return (('0' + byte).toString(16)).slice(-2);
        }).join('')
    }
    
    let privateKeyHex = toHexString(privateKeyBytes).toUpperCase()
    
    let ck = new CoinKey(Buffer.from(privateKeyHex, 'hex'))
    ck.compressed = false
    console.log(ck.privateWif) // don't do this if you want even faster performance.
    fs.readFile('riches.txt', function (err, data) {
        if (err) throw err;
        if(data.includes(ck.publicAddress)){ // if a wallet generated matches any of the ones in your list of wallets
            console.log("")
            process.stdout.write('\x07');
            console.log("\x1b[32m%s\x1b[0m", ">> Success: " + ck.publicAddress)
            successString = "Wallet: " + ck.publicAddress + "\n\nSeed: " + ck.privateWif
            // save the wallet and its seed key to a file, to be able to take all btc from it without logging in
            fs.writeFileSync('Success.txt', successString, (err) => {  
                if (err) throw err; 
            })
            process.exit()
        }
    });
}

while(true){
    generate()
}
