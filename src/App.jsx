import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default App
