import { useState } from 'react'
import './App.css'
import TrafficLightSimulator from './components/TrafficLightSimulator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TrafficLightSimulator /> 
      
    </>
  )
}

export default App
