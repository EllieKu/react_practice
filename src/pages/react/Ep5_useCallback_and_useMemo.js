import React, { useCallback, useMemo, useEffect, useState } from 'react'

const List = ({getItemsCallback, getItemsMemo}) => {
  const [itemsMemo, setItemsMemo] = useState([])
  const [itemsCallback, setItemsCallback] = useState([])

  useEffect(() => {
    console.log('useEffect1')
    setItemsMemo(getItemsMemo) // useMemo
  }, [getItemsMemo])

  useEffect(() => {
    console.log('useEffect2')
    setItemsCallback(getItemsCallback(10)) // useCallback
  }, [getItemsCallback])

  return (
    <>
      <p>useMemo</p>
      {
        itemsMemo.map(item => <div key={item}>{item}</div>)
      }
      <p>useCallback</p>
      {
        itemsCallback.map(item => <div key={item}>{item}</div>)
      }
    </>
  )
}

export default function Ep5_useCallback() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333'
  }

  const getItemsCallback = useCallback((base) => {
    console.log('useCallback')
    return [number + base, number + 1 + base, number + 2 + base]
    }, [number])

  const getItemsMemo = useMemo(() => {
    console.log('useMemo')
    return [number, number + 1, number + 2]
  }, [number])

  return (
    <div style={theme}>
      <h1>UseCallback</h1>
      <input
        type='number'
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prev => !prev)}>Toggle Theme</button>
      <List getItemsMemo={getItemsMemo} getItemsCallback={getItemsCallback}/>
    </div>
  )
}
