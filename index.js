const Observer = require('./src/Observer');
const Subject = require('./src/Subject');

;(function(root) {
  const mo = {
    Observer,
    Subject
  };

  if (typeof exports === 'object') {
    module.exports = mo;
  } else if (typeof define === 'function' && define.amd) {
    define(function() { return root.mo = mo; });
  } else {
    root.mo = mo;
  }
})(typeof window === 'object' ? window : global);
