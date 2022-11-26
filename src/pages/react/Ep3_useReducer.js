import React, { useReducer } from "react"

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
}

const initialCount = 0

function init(initialCount) {
  console.log('init')
  return { count: initialCount }
}
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {count: state.count + 1}
    case ACTIONS.DECREMENT:
      return {count: state.count - 1}
    case ACTIONS.RESET:
      return init(action.payload)
    default:
      return state
  }
}

export default function Page() {
  const [state, dispatch] = useReducer(reducer, initialCount, init)

  return (
    <>
      <h1>useReducer</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({type: ACTIONS.RESET, payload: initialCount})}>reset</button>
      <button onClick={() => dispatch({type: ACTIONS.DECREMENT})}>-</button>
      <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}>+</button>
    </>
  )
}