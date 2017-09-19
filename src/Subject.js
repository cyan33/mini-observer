const ObserverList = require('./ObserverList');

function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.notify = (context) => {
  for (let i = 0; i < this.observers.count(); i++) {
    this.observers.get(i).update(context);    
  }
}

Subject.prototype.addObserver = (obs) => {
  this.observers.add(obs);
}

Subject.prototype.removeObserver = (obs) => {
  this.observers.removeAt(this.observers.indexOf(obs));
}

module.exports = Subject;
