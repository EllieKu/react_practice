import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Function1() {
  const [count, setCount] = useState(0)

  // it runs both after the first render and after every update. 
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log('useEffect')
  })
  function incrementCount() {
    // setCount(count + 1)
    // setCount(count + 1)
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>
        Click me
      </button>
    </div>
  );
}

function EffectHook() {
  return (
    <>
      <Function1 />
    </>
  )
}
export default EffectHook