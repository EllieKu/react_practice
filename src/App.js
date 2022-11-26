import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Ep1Counters from './pages/react/Ep1_counters'
import Ep2Draggable from './pages/react/Ep2_draggable'
import Ep3UseReducer from './pages/react/Ep3_useReducer'
import Ep4EffectHook from './pages/react/Ep4_effectHook'
import Ep1Border from './pages/css/Ep1_border'

const pageList = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Ep1 Counter',
    path: '/react/ep1_counter'
  },
  {
    title: 'Ep2 Draggable',
    path: '/react/ep2_draggable'
  },
  {
    title: 'Ep3 UseReducer',
    path: '/react/ep3_useReducer'
  },
  {
    title: 'Ep4 Effect Hook',
    path: 'ep4_effectHook'
  },
  {
    title: 'Ep1 Border',
    path: '/css/ep1_border'
  },
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
            <Route path="/react/ep1_counter" element={<Ep1Counters />} />
            <Route path="/react/ep2_draggable" element={<Ep2Draggable />} />
            <Route path="/react/ep3_useReducer" element={<Ep3UseReducer />} />
            <Route path="/react/ep4_effectHook"  element={<Ep4EffectHook />} />
            <Route path="/css/ep1_border" element={<Ep1Border />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
