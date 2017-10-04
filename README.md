# Mini Observer
> A redux-like implementation of the observer pattern in JavaScript

This necessarily implements the most fundamental api of the core of redux.

## Usage

```
npm install --save @changyan/mini-observer
```

```js
import { createStore } from '@changyan/mini-observer'

const store = createStore(reducer, initState)
```

The design philosophy of reducer is essentially the same as redux, that is, pure function and immutable.

## API

* `createStore(reducer, initState)`: create a singleton store instance.
* `store.subscribe(func)`: takes a function as a callback whenever the store dispatches an action. Returns a token of the subscriber.
* `store.removeSubscriber(token)`: unsubscribe the subscriber
* `store.clearAllSubscribers()`: remove all the subscribers
* `store.dispatch(action)`: action should at least have a key, type, though it's not required

