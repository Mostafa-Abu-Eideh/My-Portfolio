import { strings } from '../../content/strings'
import type { Project } from '../../content/types'
import { useLanguage } from '../../i18n/useLanguage'

interface ProjectCardProps {
  project: Project
}

/** One project, written in English (left) and Arabic (right), meeting at a gold seam. */
export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage()

  return (
    <article className="project" aria-label={project.title.en}>
      <div className="project__side project__side--en" lang="en">
        <h3>{project.title.en}</h3>
        <p>{project.description.en}</p>
      </div>

      <div className="project__seam" aria-hidden="true" />

      <div className="project__side project__side--ar" lang="ar">
        <h3>{project.title.ar}</h3>
        <p>{project.description.ar}</p>
      </div>

      <div className="project__meta">
        <ul className="project__stack" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            {t(strings.projects.onGitHub)}
          </a>
        )}
      </div>
    </article>
  )
}
