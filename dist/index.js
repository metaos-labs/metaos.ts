
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./metaos.ts.cjs.production.min.js')
} else {
  module.exports = require('./metaos.ts.cjs.development.js')
}
