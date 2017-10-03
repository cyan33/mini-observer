import { createStore } from './index'

describe('createStore', () => {
  let store
  let bool = false
  let dummySubscriber = () => bool = !bool

  function reducer(state, action) {
    if (action.type === '/INCREASE') {
      return Object.assign({}, state, { counter: state.counter + action.payload })
    }
    return state
  }


  it('creates a singleton store instance', () => {
    store = createStore(reducer, { counter: 0 })
    expect(store.getState()).toEqual({
      counter: 0
    })
  })

  it('can add/remove multiple subscribers functions', () => {
    let token = store.subscribe(dummySubscriber)
    // whenever the store dispatches an action, all of the subscribers get invoked
    store.dispatch({ type: 'DUMMY' })
    expect(bool).toBeTruthy()
    
    token.removeSubscriber()
    store.dispatch({ type: 'DUMMY' })
    // still truthy
    expect(bool).toBeTruthy()
  })

  it('responds to actions', () => {
    let currCounter = store.getState().counter
    store.dispatch({ type: '/INCREASE', payload: 3 })
    expect(store.getState()).toEqual({ counter: currCounter + 3 })
  })
})
