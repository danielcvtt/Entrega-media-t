import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Despedida from './componentes/Despedida'
import Insulto from './componentes/Insulto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Este es el home</h1>
      <Saludo/>
      <Despedida/>
      <Insulto/>
    </>
  )
}

export default App
