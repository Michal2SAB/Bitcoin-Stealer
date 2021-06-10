"use strict";

const CoinKey = require('coinkey')
const fs = require('fs');

function generate() {
    let privateKeyHex = r(64) // generate random private key hex
    let ck = new CoinKey(Buffer.from(privateKeyHex, 'hex')) // create new bitcoin key pairs
    
    ck.compressed = false
    console.log(ck.publicAddress) // don't do this if you want faster performance (even 31x faster without logging wallets)
    
    fs.readFile('riches.txt', function (err, data) { // if generated wallet matches any from the riches.txt file
        if (err) throw err;
        if(data.includes(ck.publicAddress)){
            console.log("")
            process.stdout.write('\x07');
            console.log("\x1b[32m%s\x1b[0m", ">> Success: " + ck.publicAddress)
            successString = "Wallet: " + ck.publicAddress + "\n\nSeed: " + ck.privateWif
            fs.writeFileSync('Success.txt', successString, (err) => { // save the wallet and its private key (seed) 
                if (err) throw err; 
            })
            process.exit() // close program after success
        }
    });
}

function r(l) {
    let randomChars = 'ABCDF0123456789';
    let result = '';
    for ( var i = 0; i < l; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

// run forever
while(true){
    generate()
}
