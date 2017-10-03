const INIT = '/STORE_INIT'

function createStore(reducer, initState = {}) {
  if (typeof reducer !== 'function') {
    throw new Error('reducer should be a function')
  }

  let currentState = initState
  let subscribers = []
  let hasBeenSubscribed = false

  function getState() {
    return currentState
  }

  function subscribe(func) {
    hasBeenSubscribed = true
    subscribers.push(func)

    return {
      removeSubscriber: function() {
        subscribers.splice(subscribers.indexOf(func), 1)
        if (!subscribers.length) hasBeenSubscribed = false
      }
    }
  }

  function clearAllSubscribers() {
    subscribers = []
  }

  function dispatch(action) {
    if (hasBeenSubscribed) {
      subscribers.forEach(func => func())
    }
    currentState = reducer(currentState, action)
  }

  dispatch({ type: INIT })

  return {
    dispatch,
    getState,
    subscribe,
    clearAllSubscribers
  }
}

export { createStore }
