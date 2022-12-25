import './style.css'
import { useEffect } from 'react'
import { snowGenerator } from '../assets/scripts/snow'
import Home from '../pages/home'

function App() {

  useEffect(() => {
    snowGenerator()
  }, [])

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
