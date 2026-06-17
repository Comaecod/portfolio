'use client'

import { experiences, education, skills, projects, about } from '@/constants'
import { FiExternalLink, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1 h-6 bg-gradient-to-b from-[#915EFF] to-[#00cea8] rounded-full" />
      <h2 className="text-lg font-bold text-gray-900">{children}</h2>
    </div>
  )
}

function Tag({ children }) {
  return (
    <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-[#ede9fe] text-[#6d28d9] border border-[#c4b5fd]">
      {children}
    </span>
  )
}

export default function ResumePage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0a0a2e] to-[#050816]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-end mb-4 print:hidden">
          <button onClick={() => window.print()} className="btn-primary">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download PDF
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden resume-content">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1d1836] via-[#2a1f5e] to-[#1d1836] px-6 sm:px-8 py-6 sm:py-8">
            <div className="flex items-start gap-5">
              <img
                src="/vishnu.png"
                alt="Vishnu"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white/20 shadow-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">Vishnu</h1>
                <p className="text-base sm:text-lg text-[#00cea8] font-medium mt-0.5">Forward Deployment Engineer</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs sm:text-sm text-gray-300">
                  <span className="inline-flex items-center gap-1">
                    <FiMapPin className="w-3 h-3 text-[#915EFF]" />
                    Podili, Andhra Pradesh
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <FiPhone className="w-3 h-3 text-[#915EFF]" />
                    +91 9967570182
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <FiMail className="w-3 h-3 text-[#915EFF]" />
                    vishnuthecoder@gmail.com
                  </span>
                </div>
                <div className="flex gap-4 mt-2 text-xs sm:text-sm">
                  <a href="https://linkedin.com/in/comaecod" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
                    <FiLinkedin className="w-3.5 h-3.5" />
                    comaecod
                  </a>
                  <a href="https://github.com/Comaecod" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
                    <FiGithub className="w-3.5 h-3.5" />
                    Comaecod
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 sm:px-8 py-6">
            {/* Summary */}
            <section className="mb-6">
              <SectionHeading>Summary</SectionHeading>
              <p className="text-sm text-gray-700 leading-relaxed">
                {about.content}
              </p>
            </section>

            {/* Experience */}
            <section className="mb-6">
              <SectionHeading>Experience</SectionHeading>
              <div className="space-y-5">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-5 border-l-2 border-[#915EFF]/20">
                    <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-gradient-to-r from-[#915EFF] to-[#00cea8]" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-0.5 mb-1">
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">{exp.title}</h3>
                        <p className="text-sm text-[#7c3aed] font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs text-gray-400 whitespace-nowrap bg-gray-100 px-2 py-0.5 rounded-full self-start">{exp.period}</span>
                    </div>
                    <ul className="mt-1.5 space-y-1">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                          <span className="text-[#915EFF] mt-1.5 flex-shrink-0">
                            <svg className="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-6">
              <SectionHeading>Education</SectionHeading>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-0.5">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-sm text-gray-600">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 self-start">
                        <Tag>{edu.grade}</Tag>
                        <span className="text-xs text-gray-400 whitespace-nowrap">{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1.5">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
              <SectionHeading>Technical Skills</SectionHeading>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((s, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg bg-[#ede9fe] text-[#6d28d9] border border-[#c4b5fd]"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <SectionHeading>Projects</SectionHeading>
              <div className="space-y-3">
                {projects.map((proj, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-semibold text-gray-900">{proj.name}</h3>
                      <div className="flex items-center gap-1.5">
                        {proj.live && (
                          <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] hover:text-[#915EFF] transition-colors" title="Live demo">
                            <FiExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {proj.source && (
                          <a href={proj.source} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors" title="Source code">
                            <FiGithub className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{proj.description}</p>
                    {proj.tags && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {proj.tags.map((tag, j) => (
                          <Tag key={j}>{tag}</Tag>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page { margin: 0; size: A4; }
          body { background: white !important; margin: 0; padding: 0; }
          .print\\:hidden { display: none !important; }
          .min-h-screen { min-height: auto !important; background: white !important; padding: 0 !important; }
          .resume-content { box-shadow: none !important; border-radius: 0 !important; }
          .bg-gradient-to-r { background: #1d1836 !important; }
          a { color: inherit !important; text-decoration: none !important; }
          svg { display: none !important; }
        }
      `}</style>
    </div>
  )
}
