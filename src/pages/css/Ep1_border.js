import React from 'react';
import './Ep1_border.scss'

function Border1() {
  return (
    <div className="border1">Border1</div>
  )
}

function Border() {
  return (
    <div className='border'>
      <h1>Border</h1>
      <Border1 />
    </div>
  )
}

export default Border