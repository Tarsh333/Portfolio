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
                <h1 className='heading'>Hi, I'm Tarsh 👋</h1>
                    <p className='mb-4'>
                    Hi, I'm Tarsh Arora, a Backend Software Engineer with 2.5+ years of experience building scalable distributed systems using Go and Java.

                    I currently work at Livspace and previously worked at PlaySimple Games, where I built high-scale backend services, real-time systems, cloud migration pipelines, and distributed architectures using Go, Redis, Kubernetes, AWS, and GCP.

                    I'm passionate about backend engineering, distributed systems, and AI-powered developer tooling. I enjoy solving performance problems and building systems that scale to millions of users.
                    </p>                <a href="#skills" onClick={handleClick} className='highlight font-22'>Check Out My Skills &#8595;</a> 
                
            </div> 
           <div className='about-image'><img src={pic} /></div> 
        </div>
    )
}

export default About
