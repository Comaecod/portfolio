import { skills } from '@/constants'

export default function Skills() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <p className="section-subtitle">Technologies I&apos;ve worked on</p>
      <h1 className="section-title">Technical Skills 💻</h1>
      <div className="mt-6 flex flex-wrap gap-3">
        {skills.technical.map((s, i) => (
          <div
            key={s.name}
            className="card px-4 py-2.5 text-sm text-white font-medium"
          >
            {s.name}
          </div>
        ))}
      </div>
    </section>
  )
}
