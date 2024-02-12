import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { LanguageProvider } from './Context/LanguageContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>
    </>
  )
}

export default App
