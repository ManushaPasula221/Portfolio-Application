import React from 'react';
import Project_data from '../../assets/Project-data';
import './Project.css'

const Project = () => {
  return (
    <div id='project' className='project'>
        <div className='project-title'>
          <h2>Projects</h2>
        </div>
        <div className='project-container'>
            {Project_data.map((project, index) => {
                return <div key={index} className='project-format'>
                    <h2>{project.title}</h2>
                    <p>{project.desc}</p>
                    <p className='tools'>Tools used: {project.tools}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Project