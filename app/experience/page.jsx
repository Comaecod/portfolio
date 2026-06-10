import { experiences } from '@/constants'

function ExperienceCard({ exp, index }) {
  return (
    <div className="relative pl-10 pb-10 last:pb-0">
      <div className="absolute left-[18px] top-1 bottom-0 w-[2px] bg-gray-800 last:hidden" />
      <div className="absolute left-3 top-1 w-[10px] h-[10px] rounded-full bg-[#915EFF] border-2 border-[#050816]" />
      <div className="card">
        <span className="text-xs text-[#00cea8] font-medium">{exp.period}</span>
        <h3 className="text-white font-semibold text-base mt-1">{exp.title}</h3>
        <p className="text-gray-400 text-sm flex items-center gap-1.5 mt-0.5">
          <span>{exp.icon}</span> {exp.company}
        </p>
        <ul className="mt-3 space-y-1.5">
          {exp.points.map((pt, i) => (
            <li key={i} className="text-gray-400 text-xs sm:text-sm leading-relaxed flex gap-2">
              <span className="text-[#915EFF] mt-0.5 shrink-0">▸</span>
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <p className="section-subtitle">What I have done so far</p>
      <h1 className="section-title">Work Experience 💪</h1>
      <div className="mt-10">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
