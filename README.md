# Vishnu's Portfolio

A lightweight, mobile-first portfolio built with Next.js 14 and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Emoji / Unicode
- **Contact:** EmailJS
- **Deploy:** Vercel

## Pages

| Route | Content |
|---|---|
| `/` | Hero landing with profile photo |
| `/about` | About me + services |
| `/experience` | Work timeline |
| `/skills` | Technical skill tags |
| `/soft-skills` | Soft skill cards |
| `/projects` | Project cards with live/source links |
| `/education` | Education timeline |
| `/testimonials` | Testimonial quotes with photos |
| `/hobbies` | Hobby cards |
| `/contact` | Contact form (EmailJS) |

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `.env` (also set these in Vercel project settings → Environment Variables for production):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Build

```bash
npm run build
```

All pages are statically generated (~88 kB First Load JS each).

## License

MIT
