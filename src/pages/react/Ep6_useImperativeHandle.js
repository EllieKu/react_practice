import React, { useState, useRef } from 'react'

const CustomInput = React.forwardRef(({style, ...props}, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      style={{
        border: "none",
        backgroundColor: "lightpink",
        ...style
      }}
    />
  )
})

export default function Main() {
  const [value, setValue] = useState("red")
  const inputRef = useRef()

  return (
    <>
      <h1>useImperativeHandle</h1>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <br/>
      {/* <input
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      /> */}
      <br />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  )
}
