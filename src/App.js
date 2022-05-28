import React from 'react';
import CountClick from './components/CountClick'
import HoverCount from './components/HoverCount'
import Counter from './components/Counter'
import RefsDemo from './components/RefsDemo'

function App() {
  return (
    <div className="App">
      <Counter
        render={(count, incrementCount) => (
          <CountClick count={count} incrementCount={incrementCount} />
        )} />
      <Counter
        render={(count, incrementCount) => (
          <HoverCount count={count} incrementCount={incrementCount} />
        )} />
      <RefsDemo />
    </div>
  )
}

export default App;
