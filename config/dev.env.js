var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    ENDPOINT: '"https://emeavacationreg.com/cmsweb/?rest_route=/wp/v2/"'
})
