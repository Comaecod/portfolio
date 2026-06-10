import { social } from '@/constants'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-500">
          Built with Next.js, Tailwind, and React.
        </p>
        <div className="flex items-center gap-3">
          {social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-white transition-colors"
              title={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
