import { useState } from 'react'
import AttendanceCalculator from './attendancecalculator/AttendanceCalculator'
import SgpaCgpaCalculator from './sgpacgpacalc/SgpaCgpaCalculator'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
    </div>
  )
}

export default App
