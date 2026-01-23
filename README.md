# SmartWorker Presentation

A stunning, modern React-based presentation website for the SmartWorker remote work system. Built with React, Vite, and Framer Motion for smooth scroll-based animations.

## Live Demo

**Website URL:** https://nurikadi-art.github.io/SMARTWORKER_PREZA/

### Enable GitHub Pages (One-time setup)

To enable the live website:

1. Go to repository **Settings** (click the gear icon in the repo)
2. Navigate to **Pages** in the left sidebar (under "Code and automation")
3. Under "Build and deployment" → "Source", select **GitHub Actions**
4. Click **Save**
5. The website will be automatically deployed within a few minutes

After enabling, the deployment will run automatically on every push to `main`.

## Features

- **57 slides** with complete SmartWorker presentation content
- **Modern UI/UX** with glassmorphism, gradients, and particle effects
- **Scroll-based animations** powered by Framer Motion
- **Responsive design** for all screen sizes
- **Smooth transitions** between slides
- **Interactive elements** with hover effects

## Technologies

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Framer Motion** - Animations
- **CSS3** - Modern styling with variables, animations, and effects

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   └── Slide.tsx       # Reusable slide components with animations
│   ├── App.tsx             # Main app with all 57 slides
│   ├── App.css             # Slide-specific styles
│   ├── index.css           # Global styles and animations
│   └── main.tsx            # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages deployment workflow
└── index.html              # HTML template
```

## Animations & Effects

- **Fade in/out** animations on scroll
- **Staggered content** reveal
- **Parallax scrolling** effects
- **Animated backgrounds** with floating orbs and particles
- **Gradient text** effects
- **Glassmorphism** card designs
- **Hover interactions** on all interactive elements

## Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-yellow: #FFD700;
  --primary-gold: #F5A623;
  --primary-orange: #FF6B35;
  --primary-dark: #0A0A0F;
  /* ... */
}
```

### Animations
Keyframes are defined in `src/index.css` and can be customized:
- `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `scaleIn`, `pulse`, `shimmer`, `float`, `glow`
- `morphBackground`, `particleFloat`

## License

Private project for SmartWorker.
