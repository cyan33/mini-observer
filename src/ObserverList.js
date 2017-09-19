const Observer = require('./Observer')
const _ = require('./_')

function ObserverList() {
  this.observers = [];
}

ObserverList.prototype.get = (index) => {
  _.checkRange(this.observers.length, index);
  return this.observers[index];
}

ObserverList.prototype.count = () => {
  return this.observers.length;
}

ObserverList.prototype.indexOf = (obs, startIndex = 0) => {
  _.checkArgumentType(Observer, obs);
  for (let i = startIndex; i < this.observers.length; i++) {
    if (observers[i] === obs) {
      return i;
    }
  }
  return -1;
}

ObserverList.prototype.add = (obs) => {
  _.checkArgumentType(Observer, obs);
  this.observers.push(obs);
}

ObserverList.prototype.removeAt = (index) => {
  _.checkRange(this.observers.length, index);
  this.observers.splice(index, 1);
}

module.exports = ObserverList;
