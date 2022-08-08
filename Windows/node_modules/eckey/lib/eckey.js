var crypto = require('crypto')
var secp256k1 = require('secp256k1')

function ECKey (bytes, compressed) {
  if (!(this instanceof ECKey)) return new ECKey(bytes, compressed)

  this._compressed = typeof compressed === 'boolean' ? compressed : true
  if (bytes) this.privateKey = bytes
}

Object.defineProperty(ECKey.prototype, 'privateKey', {
  enumerable: true, configurable: true,
  get: function () {
    return this.key
  },
  set: function (bytes) {
    var byteArr
    if (Buffer.isBuffer(bytes)) {
      this.key = bytes
      byteArr = [].slice.call(bytes)
    } else if (bytes instanceof Uint8Array) {
      byteArr = [].slice.call(bytes)
      this.key = new Buffer(byteArr)
    } else if (Array.isArray(bytes)) {
      byteArr = bytes
      this.key = new Buffer(byteArr)
    } else {
      throw new Error('Invalid type. private key bytes must be either a Buffer, Array, or Uint8Array.')
    }

    if (bytes.length !== 32) throw new Error('private key bytes must have a length of 32')

    // _exportKey => privateKey + (0x01 if compressed)
    if (this._compressed) {
      this._exportKey = Buffer.concat([ this.key, new Buffer([0x01]) ])
    } else {
      this._exportKey = Buffer.concat([ this.key ]) // clone key as opposed to passing a reference (relevant to Node.js only)
    }

    // reset
    this._publicKey = null
    this._pubKeyHash = null
  }
})

Object.defineProperty(ECKey.prototype, 'privateExportKey', {
  get: function () {
    return this._exportKey
  }
})

Object.defineProperty(ECKey.prototype, 'publicHash', {
  get: function () {
    return this.pubKeyHash
  }
})

Object.defineProperty(ECKey.prototype, 'pubKeyHash', {
  get: function () {
    if (this._pubKeyHash) return this._pubKeyHash
    var sha = crypto.createHash('sha256').update(this.publicKey).digest()
    try {
      this._pubKeyHash = crypto.createHash('rmd160').update(sha).digest()
    } catch(e) {
      this._pubKeyHash = crypto.createHash('ripemd160').update(sha).digest()
    }
    return this._pubKeyHash
  }
})

Object.defineProperty(ECKey.prototype, 'publicKey', {
  get: function () {
    if (!this._publicKey) this._publicKey = secp256k1.publicKeyCreate(this.key, this.compressed)
    return new Buffer(this._publicKey)
  }
})

Object.defineProperty(ECKey.prototype, 'compressed', {
  get: function () {
    return this._compressed
  },
  set: function (val) {
    var c = !!val
    if (c === this._compressed) return

    // reset key stuff
    var pk = this.privateKey
    this._compressed = c
    this.privateKey = pk
  }
})

ECKey.prototype.toString = function (format) {
  return this.privateKey.toString('hex')
}

module.exports = ECKey
