import React from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import Nav from './Components/Nav'
import PastWork from './Components/PastWork'
import ProgressBar from './Components/ProgressBar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Achievements from "./Components/Achievements";



const App = () => {
  return (
    <div>
      <ProgressBar/>
      <Nav/>
      <div className='container'>
      <About />
      <Skills />
      <PastWork />
      <Projects />
      <Achievements />
      <Contact />
      </div>
    </div>
  )
}

export default App
