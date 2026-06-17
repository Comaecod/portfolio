import testimonials from '@/constants/testimonials'

const initialsColors = ['#915EFF', '#00cea8', '#ff6b6b', '#ffa94d', '#74c0fc', '#b197fc']

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
}

function hashColor(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return initialsColors[Math.abs(hash) % initialsColors.length]
}

function Avatar({ name, src }) {
  if (src) {
    return <img src={src} alt={name} className="w-10 h-10 rounded-full shrink-0 object-cover" loading="lazy" />
  }
  return (
    <div
      className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-white text-sm font-bold"
      style={{ backgroundColor: hashColor(name) }}
    >
      {getInitials(name)}
    </div>
  )
}

function TestimonialCard({ t }) {
  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-3">
        <Avatar name={t.name} src={t.image} />
        <div>
          <p className="text-white text-sm font-medium">{t.name}</p>
          <p className="text-gray-500 text-xs">{t.role}</p>
        </div>
      </div>
      <div className="text-[#915EFF] text-3xl leading-none mb-2">&ldquo;</div>
      <p className="text-gray-300 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <p className="section-subtitle">What Others Say About My Work</p>
      <h1 className="section-title">Testimonials 💬</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>
    </section>
  )
}
