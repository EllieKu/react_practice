import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import Ep1 from './components/Ep1_Counters'
import ErrorPage from './components/ErrorPage'

function PageList() {
  const pageList = [
    {
      title: 'Ep1_Counter',
      path: 'ep1'
    }
  ]
  const linkList = pageList.map((page) => (
    <Link to={page.path}>{page.title}</Link>
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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
