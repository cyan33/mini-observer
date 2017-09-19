function Observer() {
  // will be overrided when creating the instances of Observer
  this.update = function() {};
}

module.exports = Observer;
