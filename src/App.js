import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Ep1Counters from './pages/Ep1_counters'
import Ep2Draggable from './pages/Ep2_draggable'

function PageList() {
  const pageList = [
    {
      title: 'Ep1_Counter',
      path: 'ep1_counter'
    },
    {
      title: 'Ep2_Draggable',
      path: 'ep2_draggable'
    }
  ]
  const linkList = pageList.map((page) => (
    <Link key={page.path} to={page.path}>{page.title}</Link>
  ))
  return (
    <div>
      {linkList}
    </div>
  ) 
}

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<PageList />} />
          <Route path="/ep1_counter" element={<Ep1Counters />} />
          <Route path="/ep2_draggable" element={<Ep2Draggable />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
