# WeLearnWeShare

A modern, responsive landing page for WeLearnWeShare - a community-powered learning platform where course fees decrease as more students join.

## Features

- **Hero Section** with dynamic pricing widget showing real-time price updates
- **How It Works** - 3-step visual explanation of the community discount model
- **Features Grid** - 8 feature cards highlighting core value propositions
- **Course Roadmap** - 12-week structured learning path visualization
- **Pricing Snapshot** - Transparent, community-based pricing explanation
- **Talent Portal** - Hiring opportunities and placement statistics
- **Testimonials** - Student success stories and partner employers
- **FAQ** - Expandable accordion with common questions
- **Final CTA** - Conversion-focused call-to-action section
- **Footer** - Links, social media, and legal information

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
welearn-weshare/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Navigation.tsx   # Sticky navigation bar
│       ├── Hero.tsx         # Hero section with pricing widget
│       ├── HowItWorks.tsx   # 3-step process
│       ├── Features.tsx     # 8 feature cards
│       ├── CourseRoadmap.tsx # Course structure
│       ├── Pricing.tsx      # Pricing section
│       ├── TalentPortal.tsx # Hiring section
│       ├── Testimonials.tsx # Social proof
│       ├── FAQ.tsx          # FAQ accordion
│       ├── FinalCTA.tsx     # Final call-to-action
│       └── Footer.tsx       # Footer component
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Features Implemented

✅ Sticky navigation with primary CTAs
✅ Dynamic pricing widget in hero section
✅ All 10 content sections as specified
✅ Mobile-first responsive design
✅ Accessibility features (ARIA labels, keyboard navigation)
✅ Modern, clean UI with Tailwind CSS
✅ Smooth transitions and hover effects

## Customization

- Colors: Edit `tailwind.config.js` to customize the primary color scheme
- Content: Update component files in `src/components/` to modify text and content
- Styling: Modify Tailwind classes in components or extend the theme in `tailwind.config.js`

## License

MIT

