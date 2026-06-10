import Link from 'next/link'
import { hero } from '@/constants'

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center bg-hero">
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="mb-6 flex justify-center">
          <img
            src="/vishnu.png"
            alt="Vishnu"
            className="w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover border-2 border-[#915EFF]/30"
          />
        </div>
        <p className="text-sm text-[#915EFF] font-medium tracking-widest uppercase mb-4">
          {hero.description}
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          {hero.greeting}{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-[#00cea8]">
            {hero.name}
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-8">
          {hero.tagline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/about" className="btn-primary w-full sm:w-auto justify-center">
            About Me →
          </Link>
          <Link href="/contact" className="btn-outline w-full sm:w-auto justify-center">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
