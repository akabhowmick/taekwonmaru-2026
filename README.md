# TaekwonMaru - Premium Martial Arts Website

Modern, accessible, and responsive React + TypeScript + Tailwind website for TaekwonMaru martial arts school.

## Features

- ✅ React 18 + TypeScript + Vite
- ✅ Tailwind CSS with custom design system (dark navy + gold theme)
- ✅ shadcn/ui-compatible components
- ✅ Fully responsive (mobile-first)
- ✅ WCAG 2.1 AA accessibility compliant
- ✅ React Router v6 multi-page structure
- ✅ Framer Motion animations
- ✅ Working contact form (FormSubmit.co)
- ✅ SEO optimized

## Pages

1. **Home** - Hero, programs preview, why choose us, CTA
2. **About** - School history, mission, masters profiles
3. **Programs** - All 9 programs with details and schedules
4. **Schedule** - Weekly schedule + upcoming events
5. **Contact** - Booking form + contact info + getting started steps

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

## Design System

### Colors

- Navy: `#0a0f1e` (primary background)
- Gold: `#c9a84c` (primary accent)
- Red: `#c0392b` (CTAs)
- Muted: `#8a94a8` (secondary text)

### Typography

- Display: Bebas Neue (headings)
- Body: DM Sans (paragraphs, UI)
- Accent: Cinzel (logo, quotes)

### Key Components

- `Button` - Primary, outline, ghost, and red variants
- `Navigation` - Fixed nav with mobile menu
- `Footer` - Full site footer with links and hours

## Customization

### Update Contact Form Email

Edit `src/pages/ContactPage.tsx` line 20:

```tsx
const response = await fetch('https://formsubmit.co/YOUR_EMAIL_HERE', {
```

### Update School Info

- Hours: `src/components/Footer.tsx`
- Events: `src/pages/SchedulePage.tsx`
- Programs: `src/pages/ProgramsPage.tsx`

### Add Master Images

Replace placeholder initials in `src/pages/AboutPage.tsx` with actual images.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Deploy dist/ folder via Netlify UI or CLI
```

## Accessibility Features

- Semantic HTML5
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader optimized
- Color contrast WCAG AA compliant
- Responsive font scaling

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile: iOS 14+, Android Chrome

## License

© 2026 TaekwonMaru. All rights reserved.
