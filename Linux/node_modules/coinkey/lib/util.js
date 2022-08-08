// poor man's clone
function clone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function isArrayish (maybeArray) {
  return Array.isArray(maybeArray) ||
    (maybeArray instanceof Uint8Array) ||
    Buffer.isBuffer(maybeArray)
}

// versions === { private, public } ? if no, check '.version(s)'
function normalizeVersions (versions) {
  if (!versions) return null
  if (typeof versions !== 'object') return null
  versions = clone(versions)
  if (versions.version) versions.versions = versions.version
  // check for actual versions object
  if (versions && 'private' in versions) return versions
  // if it exists, maybe in .versions?
  else versions = versions.versions
  if (versions && 'private' in versions) return versions
  else return null
}

function bufferizeVersion (version) {
  if (typeof version === 'string') return hexStringToBuffer(version)
  if (typeof version === 'number') return beUIntToBuffer(version)
  throw new Error('invalid version type.')
}

// accepts hex string sequence with or without 0x prefix
function hexStringToBuffer (input) {
  var isValidRE = /^(0x)?([\dA-Fa-f]{2})+$/g
  if (!isValidRE.test(input)) throw new Error('invalid hex string.')
  return Buffer.from(input.slice(input.slice(0, 2) === '0x' ? 2 : 0), 'hex')
}

function beUIntToBuffer (num) {
  var length
  if (num === 0) length = 1
  else if (num > 0) length = Math.ceil((Math.log(num + 1) / Math.log(2)) / 8)
  var buf = Buffer.alloc(length)
  buf.writeUIntBE(num, 0, length)

  return buf
}

module.exports = {
  clone: clone,
  isArrayish: isArrayish,
  normalizeVersions: normalizeVersions,
  bufferizeVersion: bufferizeVersion
}
