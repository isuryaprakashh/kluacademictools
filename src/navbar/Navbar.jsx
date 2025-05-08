import React from 'react'
import {Link,Route,Routes} from 'react-router-dom'
import Home from '../homepage/Home'
import AttendanceCalculator from '../attendancecalculator/AttendanceCalculator'
import SgpaCgpaCalculator from '../sgpacgpacalc/SgpaCgpaCalculator'
export default function Navbar() {
  return (
    <div>
        <div className="navbar">
            <Link to='/'>Home</Link>
            <Link to='/attendance'>Check Attendance</Link>
            <Link to='/sgpacgpa'>Check SGPA/CGPA</Link>
        </div>
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/attendance' Component={AttendanceCalculator}/>
            <Route path='/sgpacgpa' Component={SgpaCgpaCalculator}/>
        </Routes>
    </div>
  )
}
