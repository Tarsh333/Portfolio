import React from 'react'
import { TiTick } from 'react-icons/ti'
import {GrTechnology} from 'react-icons/gr'
const skillsArray = [
  "Go (Golang)",
  "Java",
  "Distributed Systems",
  "Microservices",
  "gRPC",
  "Redis",
  "Kubernetes",
  "Docker",
  "AWS S3",
  "Google Cloud Platform",
  "Cloudflare Workers",
  "PostgreSQL",
  "MongoDB",
  "BigQuery",
  "React.js",
  "Node.js",
  "CI/CD",
  "Event Driven Architecture"
];const Skills = () => {
    const handleClick=(e)=>{
        e.preventDefault()
        const target=e.target.getAttribute('href')
        const location=document.querySelector(target).offsetTop
        window.scroll(0,location - 150)
    }
    return (
        <div id="skills">
            <h1 className='heading'>Skills and Technologies <GrTechnology/></h1>
            <div className='skill-map'>
            {skillsArray.map((skill,id) => {
                return (<div className='skill' key={id} > <TiTick className='tick' />{skill}</div>)
            })}
            </div>
            <a href="#past-work" onClick={handleClick} className='highlight font-22'>Check Out My Work History &#8595;</a> 
        </div>
    )
}

export default Skills
