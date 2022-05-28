import React from 'react'

class CountClick extends React.Component {
  render() {
    const { count, incrementCount } = this.props
    return (
      <h2 onClick={incrementCount}>Click {count} times</h2>
    )
  }
}

export default CountClick