
import Project from './Project'
import LoadProyect from './LoadProyect'

import { useProjects } from '../hooks/useProjects'


export default function Projects() {

  const [loading, projects] = useProjects()

  return (

    <section id='addons-header' className='page-section content-header'>
      <div className='page-section-inner flex-container justify-between align-center'>
        <div className='header-left'>
          <h1 className='title'>Projects</h1>
          <p className='title-description'>A list of the projects I've worked on or I'm currently working on.</p>
        </div>
      </div>

      <section id='addons-content' className='page-section'>
        <div className='card-container'>

          {loading ?

            <>
              <LoadProyect />
              <LoadProyect />
              <LoadProyect />
              <LoadProyect />
            </>

            : (
              <>
                {projects.map(project => (
                  <Project key={project.title} project={project} />
                ))}
              </>
            )}
        </div>
      </section>
    </section>
  )
}
