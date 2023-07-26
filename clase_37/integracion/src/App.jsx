import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendario from './Calendario.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calendario />
      <Calendario />
    </>
  )
}

export default App
