import React from 'react'

class HoverCount extends React.Component {
  render() {
    const { count, incrementCount } = this.props
    return (
      <h2 onMouseOver={incrementCount}>MouseOver {count} times</h2>
    )
  }
}

export default HoverCount