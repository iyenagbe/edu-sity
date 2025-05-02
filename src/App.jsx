import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
         <programs />
      </div>
      
      
    </div>
  )
}

export default App