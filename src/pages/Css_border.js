import React from 'react';
import './Css_border.scss'

function Border1() {
  return (
    <div className="border1">border 1</div>
  )
}

function Border2() {
  return (
    <div className="border2">border 2</div>
  )
}

function Border3() {
  return (
    <div className="border3">border 3</div>
  )
}

function Wrapper4() {
  return (
    <>
      <div className="border4"></div>
    </>
  )
}

function Border() {
  return (
    <>
      <h1>Border</h1>
      <Border1 />
      <Border2 />
      <Border3 />
      <Wrapper4 />
      <div>
        <span>資料來源: </span>
        <a href='https://dev.to/chokcoco/fantastic-css-border-animation-5166'>Fantastic CSS border animation</a>
      </div>
    </>
  )
}

export default Border