import './globals.css'

export const metadata = {
  title: 'Vishnu | Forward Deployment Engineer',
  description:
    'Full Stack Developer specializing in React, Next.js, Angular, and Three.js. Experienced in building high-performance web applications with modern technologies.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Angular', 'Portfolio', 'Vishnu'],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Vishnu | Forward Deployment Engineer',
    description: 'Full Stack Developer specializing in React, Next.js, Angular, and Three.js.',
    type: 'website',
    locale: 'en_US',
  },
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
