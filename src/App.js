import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Ep1 from './components/Ep1_Counters'
import Ep2 from './components/Ep2_Draggable'

function PageList() {
  const pageList = [
    {
      title: 'Ep1_Counter',
      path: 'ep1'
    },
    {
      title: 'Ep2_Draggabler',
      path: 'ep2'
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
          <Route path="/ep1" element={<Ep1 />} />
          <Route path="/ep2" element={<Ep2 />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
