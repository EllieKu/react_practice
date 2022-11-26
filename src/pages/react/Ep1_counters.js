import React from 'react'

class CountClick extends React.Component {
  render() {
    const { count, handleClick } = this.props
    return (
      <h2 onClick={handleClick}>Click {count} times</h2>
    )
  }
}

class HoverCount extends React.Component {
  render() {
    const { count, handleMouseOver } = this.props
    return (
      <h2 onMouseOver={handleMouseOver}>MouseOver {count} times</h2>
    )
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
      </div>        
    )
  }
}

function Counters() {
  return (
    <div>
      <h1>click counter</h1>
      <Counter render={(count, incrementCount) => (
        <CountClick count={count} handleClick={incrementCount} />
      )} />
      <hr />
      <h1>hover counter</h1>
      <Counter render={(count, incrementCount) => (
        <HoverCount count={count} handleMouseOver={incrementCount} />
      )} />
      <hr />
    </div>
  )
}

export default Counters