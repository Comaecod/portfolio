import { hobbies } from '@/constants'

export default function Hobbies() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <p className="section-subtitle">Personal Interests</p>
      <h1 className="section-title">Hobbies 🎮</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
        {hobbies.map((h, i) => (
          <div
            key={h.name}
            className="card flex flex-col items-center text-center gap-3"
          >
            <span className="text-3xl sm:text-4xl">{h.icon}</span>
            <p className="text-gray-300 text-sm font-medium">{h.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
