import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Ep1Counters from './pages/Ep1_counters'
import Ep2Draggable from './pages/Ep2_draggable'
import CssBorder from './pages/Css_border'

const pageList = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Ep1 Counter',
    path: 'ep1_counter'
  },
  {
    title: 'Ep2 Draggable',
    path: 'ep2_draggable'
  },
  {
    title: 'Css Border',
    path: 'css_border'
  }
]

function Sidebar() {
  return (
    <ul className="sidebar">
      {
        pageList.map((page) => 
          <li key={page.title}>
            <Link key={page.path} to={page.path}>{page.title}</Link>
          </li>
      )}
    </ul>
  )
}

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <div className="route">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/ep1_counter" element={<Ep1Counters />} />
            <Route path="/ep2_draggable" element={<Ep2Draggable />} />
            <Route path="/css_border" element={<CssBorder />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
