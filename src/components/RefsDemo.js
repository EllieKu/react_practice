import React from 'react'

class RefsDemo extends React.Component {
  constructor(props) {
    super(props)
      this.inputRefs = React.createRef()
      this.cbRefs = null
      this.setRefs = element => {
        console.log(element)
        this.cbRefs = element
      }
  }

  componentDidMount() {
    // this.inputRefs.current.focus()
    if(this.cbRefs) {
      this.cbRefs.focus()
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRefs}></input>
        <input type="text" ref={this.setRefs}></input>
      </div>
    )
  }
}

export default RefsDemo