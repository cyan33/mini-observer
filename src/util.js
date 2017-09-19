const checkArgumentType = (type, instance) => {
  if (!instance instanceof type) {
    throw `${arguments.callee.caller.name.toString()} should accept an instance of ${type}!`;
  }
};

const checkRange = (length, i) => {
  if (i < 0 || i >= length) {
    throw `${arguments.callee.caller.name.toString()} index out of range!`;
  }
}

const extend = (target, extension) => {
  for (let key in extension) {
    target[key] = extension[key];
  } 
}

module.exports = { checkArgumentType, checkRange, extend };
