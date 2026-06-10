import { about } from '@/constants'

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <p className="section-subtitle">Introduction</p>
      <h1 className="section-title">{about.title}</h1>

      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-6">
        {about.content}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        {about.services.map((s) => (
          <div key={s.title} className="card text-center">
            <div className="text-3xl mb-2">{s.icon}</div>
            <h3 className="text-white font-semibold text-sm">{s.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
