import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">Naby</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2">About</Link>
            <Link to="/skills" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Skills</Link>
            <Link to="/projects" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Projects</Link>
            <Link to="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Contact</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2">Home</Link>
          <Link to="/about" className="block px-3 py-2">About</Link>
          <Link to="/skills" className="block px-3 py-2">Skills</Link>
          <Link to="/projects" className="block px-3 py-2">Projects</Link>
          <Link to="/contact" className="block px-3 py-2">Contact</Link>
        </div>
      )}
    </nav>
  )
}

export default Navigation
