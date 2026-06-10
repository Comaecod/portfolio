'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { navCategories } from '@/constants'

function ChevronDown() {
  return (
    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function ChevronUp() {
  return (
    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openCategory, setOpenCategory] = useState(null)
  const headerRef = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenCategory(null)
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  useEffect(() => { setMenuOpen(false); setOpenCategory(null) }, [pathname])

  const isActive = (href) => pathname === href

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-[#050816]/90 backdrop-blur border-gray-800/50' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-white tracking-tight">
          Vishnu<span className="text-[#915EFF]">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {navCategories.map((cat) => (
            <div key={cat.label} className="relative group">
              <button
                onClick={() => setOpenCategory(openCategory === cat.label ? null : cat.label)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {cat.label}
                {openCategory === cat.label ? <ChevronUp /> : <ChevronDown />}
              </button>
              {(openCategory === cat.label || undefined) && (
                <div className="absolute top-full left-0 mt-1 bg-[#1d1836] border border-gray-800 rounded-lg py-1 min-w-[140px] shadow-xl">
                  {cat.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-4 py-2 text-sm ${
                        isActive(child.href)
                          ? 'text-white bg-[#915EFF]/10'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {child.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-gray-300 transition-all ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-gray-300 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-gray-300 transition-all ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-[#0a0a1a]/95 backdrop-blur border-b border-gray-800/50 max-h-[70vh] overflow-y-auto">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navCategories.map((cat) => (
              <div key={cat.label}>
                <button
                  onClick={() => setOpenCategory(openCategory === cat.label ? null : cat.label)}
                  className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-300"
                >
                  {cat.label}
                  {openCategory === cat.label ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openCategory === cat.label && (
                  <div className="ml-3 flex flex-col gap-0.5">
                    {cat.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-3 py-2 rounded-lg text-sm ${
                          isActive(child.href)
                            ? 'bg-[#915EFF]/10 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {child.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
