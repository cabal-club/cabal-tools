var util = require('util')
var custom = util.inspect.custom

module.exports = custom || Symbol.for('util.inspect.custom')
