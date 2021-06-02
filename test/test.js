var CoinKey = require('coinkey')
const fs = require('fs');

var privateKeyHex = "1184CD2CDD640CA42CFC3A091C51D549B2F016D454B2774019C2B2D2E08529FD"

var ck = new CoinKey(Buffer.from(privateKeyHex, 'hex'))
ck.compressed = false
console.log(ck.privateWif)
fs.readFile('test.txt', function (err, data) {
    if (err) throw err;
    if(data.includes(ck.publicAddress)){
        console.log("")
        process.stdout.write('\x07');
        console.log("\x1b[32m%s\x1b[0m", ">> Success: " + ck.publicAddress)
        successString = "Wallet: " + ck.publicAddress + "\n\nSeed: " + ck.privateWif
        fs.writeFileSync('Success.txt', successString, (err) => {  
            if (err) throw err; 
        })
        process.exit()
    }
});
