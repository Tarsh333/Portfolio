import React from 'react'
import pic from '../pic.jpg'
const About = () => {
    const handleClick=(e)=>{
        e.preventDefault()
        const target=e.target.getAttribute('href')
        const location=document.querySelector(target).offsetTop
        window.scroll(0,location - 150)
    }
    return (
        <div id="about">
           <div>
                <h1 className='heading'>About</h1>
                <p className='mb-4'>Hi, My name is Tarsh. I am a full stack web developer & programmer. I make web applications mostly using MERN stack. I love making making rich interactive websites and am passionate about learning new skills. Currently pursing bachelors in Computer Science at <a href="https://www.iiitdmj.ac.in/" target="_blank">IIIT Jabalpur</a>.  </p> 
                <a href="#skills" onClick={handleClick} className='highlight font-22'>Check Out My Skills &#8595;</a> 
                
            </div> 
           <div className='about-image'><img src={pic} /></div> 
        </div>
    )
}

export default About
