import { projects } from '@/constants'

const tagColors = {
  'React': 'bg-blue-500/10 text-blue-300',
  'Firebase': 'bg-yellow-500/10 text-yellow-300',
  'Groq LLM': 'bg-purple-500/10 text-purple-300',
  'Cloudinary': 'bg-indigo-500/10 text-indigo-300',
  'Next.js': 'bg-white/10 text-gray-200',
  'CockroachDB': 'bg-green-500/10 text-green-300',
  'Clerk': 'bg-pink-500/10 text-pink-300',
  'Livekit': 'bg-red-500/10 text-red-300',
  'MongoDB': 'bg-emerald-500/10 text-emerald-300',
  'NextAuth': 'bg-orange-500/10 text-orange-300',
  'Prisma': 'bg-teal-500/10 text-teal-300',
  'Swagger': 'bg-lime-500/10 text-lime-300',
  'MySQL': 'bg-sky-500/10 text-sky-300',
  'Spring Boot': 'bg-green-600/10 text-green-400',
  'Vercel': 'bg-gray-500/10 text-gray-300',
}

function ProjectCard({ project, index }) {
  return (
    <div className="card flex flex-col">
      <h3 className="text-white font-semibold text-base">{project.name}</h3>
      <p className="text-gray-400 text-xs sm:text-sm mt-1.5 leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.tags.map((t) => (
          <span key={t} className={`tag ${tagColors[t] || 'bg-gray-500/10 text-gray-300'}`}>
            #{t}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-4">
        {project.source && (
          <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs !px-3 !py-1.5">
            Source
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs !px-3 !py-1.5">
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <p className="section-subtitle">My work</p>
      <h1 className="section-title">Projects 🚀</h1>
      <p className="text-gray-400 text-sm mt-2 max-w-2xl">
        Following projects showcases my skills and experience through real-world examples of my work.
      </p>
      <div className="grid-auto mt-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
