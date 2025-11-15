# Stateway Capital Group Landing Page

A professional, responsive landing page for Stateway Capital Group - an asset management and financial services firm building wealth across Africa.

## Features

- Hero section showcasing investment value proposition
- Comprehensive portfolio sections: Real Estate, Public Markets, Private Equity
- Investment terms with benchmark returns (3.5%, 10%, 20%)
- Client testimonials from families, SMEs, and institutional investors
- Responsive grid and semantic HTML
- Theme variables for brand customization
- **Light/dark theme toggle** with localStorage persistence and system preference detection
- Accessible forms, landmarks, and focus styles
- SEO-friendly meta tags + social cards

## Tech Stack

- React 18
- TypeScript 5
- Vite 5
- Modern CSS (custom properties + utility layer)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
npm run preview
```

## Customization

- Update brand colors in `src/styles/theme.css` (currently using professional blue palette)
- Adjust investment terms, returns, and portfolio details in component files under `src/components`
- Replace placeholder OG image with company branding in `index.html`
- Update minimum investment amounts and fee structures in `src/components/Pricing.tsx`
- Theme toggle icon/text customizable in `src/components/ThemeToggle.tsx`

## Project Structure

```text
project16/
  index.html
  package.json
  tsconfig.json
  vite.config.ts
  src/
    main.tsx
    App.tsx
    components/
      Hero.tsx
      ValueProps.tsx
      Features.tsx
      Pricing.tsx
      Testimonials.tsx
      CallToAction.tsx
      Footer.tsx
    styles/
      theme.css
      global.css
      utilities.css
```

## Accessibility

- Semantic landmark elements (header, main, footer, nav, section)
- Form with associated label (visually hidden)
- Color contrast maintained with dark palette

## License

Proprietary – adjust as needed.
