import React, { useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import AttendanceCalculator from './AttendanceCalculator'
import SgpaCgpaCalculator from './SgpaCgpaCalculator'
import PercentageCalculator from './PercentageCalculator'
import Privacy from './Privacy'
import Terms from './Terms'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  // Separate active styles for Mobile vs Desktop
  const getDesktopClass = (path) => location.pathname === path ? 'bg-highlight text-primary' : 'text-white hover:bg-highlight hover:text-primary';
  const getMobileClass = (path) => location.pathname === path ? 'bg-secondary-bg text-primary' : 'text-text-main hover:bg-gray-50 hover:text-primary';

  return (
    <div>
      <nav className="bg-primary shadow-md sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Brand */}
            <Link to='/' className="text-white font-bold text-xl tracking-tight" onClick={closeMenu}>
              Academic Tools
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              <Link to='/' className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${getDesktopClass('/')}`}>Home</Link>
              <Link to='/attendance' className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${getDesktopClass('/attendance')}`}>Check Attendance</Link>
              <Link to='/sgpacgpa' className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${getDesktopClass('/sgpacgpa')}`}>Check SGPA/CGPA</Link>
              <Link to='/percentage' className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${getDesktopClass('/percentage')}`}>Percentage</Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-200 focus:outline-none p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <Link to='/' onClick={closeMenu} className={`block px-3 py-2 rounded-xl text-base font-medium transition-colors ${getMobileClass('/')}`}>Home</Link>
              <Link to='/attendance' onClick={closeMenu} className={`block px-3 py-2 rounded-xl text-base font-medium transition-colors ${getMobileClass('/attendance')}`}>Check Attendance</Link>
              <Link to='/sgpacgpa' onClick={closeMenu} className={`block px-3 py-2 rounded-xl text-base font-medium transition-colors ${getMobileClass('/sgpacgpa')}`}>Check SGPA/CGPA</Link>
              <Link to='/percentage' onClick={closeMenu} className={`block px-3 py-2 rounded-xl text-base font-medium transition-colors ${getMobileClass('/percentage')}`}>Percentage</Link>
            </div>
          </div>
        )}
      </nav>

      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/attendance' Component={AttendanceCalculator} />
        <Route path='/sgpacgpa' Component={SgpaCgpaCalculator} />
        <Route path='/percentage' Component={PercentageCalculator} />
        <Route path='/privacy' Component={Privacy} />
        <Route path='/terms' Component={Terms} />
      </Routes>
    </div>
  )
}

