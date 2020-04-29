# Redux samples

## Redux has 3 main parts:

1. Actions
2. Reducers
3. Store

## Store
As you’ve already guessed, the store hold the state of the application.
The store is actually an object, not a class, although it may feel like one at first. It contains a few extra things other than your application’s state as well (like functions and other objects).

Although, theoretically, it is possible to create multiple stores,
this is against the pattern that Redux follows.
Remember, we create only one store per application!

We can subscribe to listen to events whenever the store updates. In a non-React app, we might use this subscription to update the UI

## Actions
Actions are plain JavaScript objects that describe WHAT happened, but don’t describe HOW the app state changes.

We just dispatch (send) them to our store instance whenever we want to update the state of our application. The rest is handled by the reducers

One important thing to remember is that Redux requires our action objects to contain a type field. This field is used to describe what kind of action we are dispatching

## Reducers
Reducers are pure functions that define HOW the app state changes. In other words, they are used to recalculate the new application state or, at least a part of it.

Whenever we dispatch an action to our store, the action gets passed to the reducer.
The reducer function takes two arguments: the previous app state, the action being dispatched and returns the new app state.

```(previousState, action) => newState```

In other words, the reducer will calculate the new state of our app based on the action (and its type) we dispatched.






<!-- 
## npm install
## npm start -->
