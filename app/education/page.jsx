import { education } from '@/constants'

function EduCard({ item, index }) {
  return (
    <div className="relative pl-10 pb-10 last:pb-0">
      <div className="absolute left-[18px] top-1 bottom-0 w-[2px] bg-gray-800 last:hidden" />
      <div className="absolute left-3 top-1 w-[10px] h-[10px] rounded-full bg-[#00cea8] border-2 border-[#050816]" />
      <div className="card">
        <span className="text-xs text-[#915EFF] font-medium">{item.period}</span>
        <h3 className="text-white font-semibold text-base mt-1">{item.degree}</h3>
        <p className="text-gray-400 text-sm">{item.institution}</p>
        <p className="text-[#00cea8] text-xs mt-0.5">{item.grade}</p>
        <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <p className="section-subtitle">Where I got my education</p>
      <h1 className="section-title">Education 🎓</h1>
      <div className="mt-10">
        {education.map((item, i) => (
          <EduCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
