;(function(){

import '../node_modules/grafi-formatter/src/formatter'
import 'despeckle'

  var grafi = {}
  grafi.despeckle = despeckle

  if (typeof module === 'object' && module.exports) {
    module.exports = grafi
  } else {
    this.grafi = grafi
  }
}())
