import React from 'react';
import './Ep1_border.scss'

function Border1() {
  return (
    <div className="border1">Border1</div>
  )
}

function Border2() {
  return (
    <div className="border2">Border2</div>
  )
}

function Border3() {
  return (
    <div className="border3">Border3</div>
  )
}

function Border4() {
  return (
    <div className="border4">Border4</div>
  )
}

function Border() {
  return (
    <div className='border'>
      <h1>Border</h1>
      <Border1 />
      <Border2 />
      <Border3 />
      <Border4 />
    </div>
  )
}

export default Border