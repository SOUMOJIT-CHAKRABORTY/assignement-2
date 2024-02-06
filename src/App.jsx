import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-32 py-5 h-screen'>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App
