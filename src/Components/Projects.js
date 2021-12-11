import React from 'react'
import projectsInfo from './ProjectsInfo'
import { GrProjects } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'
import { HiOutlineExternalLink } from 'react-icons/hi'
const Projects = () => {
  const proj = projectsInfo.map((p) => {
    return (<div class="card" key={p.id}>
      <div class="card__content">

        <div class="card__front">
          <h3 class="card__title">{p.name}</h3>
        </div>

        <div class="card__back">
          <p class="card__body">{p.desc}<br/><br/>
          <a href={p.link} target='_blank'>Visit Website <HiOutlineExternalLink/></a>
          <a href={p.github} target='_blank'>See Code <AiFillGithub/></a>
          </p>
          
        </div>

      </div>
    </div>)
  })
  return (
    <div id="projects">
      <h1 className='heading'>Projects<GrProjects /></h1>
      <div className='cards-container'>
      {proj}
      </div>
    </div>
  )
}

export default Projects
