/* @flow */
'use strict'

const configman = require('@wunderflats/configman')
  .ensureAllSet([])

console.log(configman.get('PATH'))
