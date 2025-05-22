import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/programs'
import Title from './components/Title/Title'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      <Title subTitle='Welcome to Our Campus' title='Explore our 
      programs and facilities' />
      <Programs />
      </div>
      
      
    </div>
  )
}

export default App