
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact';
import Skills from './components/Skills';
import Project from './components/Project';
import Dashboard from './components/Dashboard';
import Login from './components/Login';


function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
    </Router>
  )
}

export default App