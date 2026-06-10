import { skills } from '@/constants'

export default function SoftSkills() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <p className="section-subtitle">What Makes Me, Me</p>
      <h1 className="section-title">Soft Skills 🦸‍♂️</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.soft.map((s, i) => (
          <div key={s.title} className="card">
            <h3 className="text-white font-bold text-sm sm:text-base mb-2">{s.title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
