import { projects } from '../../content/projects'
import { strings } from '../../content/strings'
import { Section } from '../common/Section'
import { ProjectCard } from './ProjectCard'
import './Projects.css'

export function Projects() {
  return (
    <Section id="work" title={strings.sections.work}>
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
