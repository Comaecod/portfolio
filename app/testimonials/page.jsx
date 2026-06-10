import testimonials from '@/constants/testimonials'

function TestimonialCard({ t }) {
  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={t.image}
          alt={t.name}
          className="w-10 h-10 rounded-full shrink-0 object-cover"
          loading="lazy"
        />
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
