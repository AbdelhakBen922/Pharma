import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import PeriodFilter from './components/PeriodFilter'
import Dashboard from './components/Dashboard'
import Inventory from './components/Inventory'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Sidebar />
      <Inventory />
    </div>
  )
}

export default App
