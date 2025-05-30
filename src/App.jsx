import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


export const App = () => {

  const [playerState, setPlayerState] = useState(false);



  return (
    <div>
      <Navbar />

      <Hero />

      <div className="container">

      <Title subTitle='Welcome to Our Campus' title='Explore our 
      programs and facilities' />
      <Programs />

      <About setPlayerState = {setPlayerState}/>
      <Title subTitle='Gallery' title='Campus Photos' />

      <Campus />
      <Title subTitle='TESTIMONIALS' title='Student Experiences' />

      <Testimonials />

      
      <Title subTitle='Contact Us' title='Get in Touch' />
      <Contact />

      <Footer />
      
      </div>

      <VideoPlayer playerState={playerState} setPlayerState={setPlayerState} />
     </div>
  )
}

export default App