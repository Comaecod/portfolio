'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const NAME_REGEX = /^[a-zA-Z ]+$/
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const valid =
    NAME_REGEX.test(form.name) &&
    EMAIL_REGEX.test(form.email) &&
    form.message.trim().length > 10

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          to_name: 'Vishnu',
          from_email: form.email.trim(),
          to_email: 'vishnuthecoder@gmail.com',
          message: form.message.trim(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <section className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">🚀</div>
        <h1 className="text-2xl font-bold text-white mb-2">Message Sent!</h1>
        <p className="text-gray-400 text-sm">
          Got it! I&apos;ll loop back with you shortly.
        </p>
      </section>
    )
  }

  return (
    <section className="max-w-lg mx-auto px-4 py-16">
      <p className="section-subtitle">Get in touch</p>
      <h1 className="section-title">Contact 📬</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="block text-sm text-white font-medium mb-1.5">Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="The name's Bond."
            className="w-full bg-[#1d1836] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[#915EFF] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-white font-medium mb-1.5">Your Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="I won't share your email with aliens."
            className="w-full bg-[#1d1836] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[#915EFF] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-white font-medium mb-1.5">Message</label>
          <textarea
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Let's connect and build awesome-ness!"
            className="w-full bg-[#1d1836] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[#915EFF] transition-colors resize-none"
          />
        </div>
        {error && <p className="text-red-400 text-xs">{error}</p>}
        <button
          type="submit"
          disabled={!valid || loading}
          className="btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}
