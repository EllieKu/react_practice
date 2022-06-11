import React from "react";
import './Ep2_Draggable.css'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.getDraggableElement = this.getDraggableElement.bind(this)
  }

  componentDidMount() {
    const draggables = document.querySelectorAll('.draggable')
    const containers = document.querySelectorAll('.container')
    
    draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
      })

      draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
      })
    })

    containers.forEach(container => {
      container.addEventListener('dragover', e => {
        e.preventDefault() // change cursor
        const aftertElement = this.getDraggableElement(container, e.clientY) // e.clientY: mouse position
        const draggable = document.querySelector('.dragging')
        if (aftertElement == null) {
          container.append(draggable)
        } else {
          container.insertBefore(draggable, aftertElement)
        }
      })
    })
  }

  getDraggableElement(container, y) {
    const draggableElement = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElement.reduce((closet, child) => {
      const box = child.getBoundingClientRect() // .draggable:not(.dragging) inside mouseover
      const offset = y - box.top - box.height / 2 // distance between the center of our box ans mouse

      if (offset < 0 && offset > closet.offset) {
        return {
          offset: offset,
          element: child
        }
      } else {
        return closet
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }

  render() {
    return (
      <main>
        <div className="container">
          <p className="draggable" draggable="true">1</p>
          <p className="draggable" draggable="true">2</p>
        </div>
        <div className="container">
          <p className="draggable" draggable="true">3</p>
          <p className="draggable" draggable="true">4</p>
        </div>
      </main>
    )
  }
}

export default Main