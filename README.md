# Basic Landing Page Template

A customizable React landing page boilerplate built with Vite, React, and Tailwind CSS.

## Features

- ⚡ Fast development with Vite
- 🎨 Beautiful, modern UI with Tailwind CSS
- 🔧 Easy customization through config file
- 📱 Fully responsive design
- 🚀 Production-ready build setup

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

All customization is done through the `src/config/landingConfig.js` file. You can:

- **Hero Section**: Change title, subtitle, buttons, and background
- **Features Section**: Add, remove, or modify feature items
- **CTA Section**: Customize call-to-action text and button
- **Footer**: Update company info, links, and social media

### Example Customization

Edit `src/config/landingConfig.js`:

```javascript
export const landingConfig = {
  hero: {
    title: "Your Custom Title",
    subtitle: "Your custom subtitle",
    // ... more options
  },
  // ... other sections
}
```

## Project Structure

```
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   └── LandingPage.jsx
│   ├── config/         # Configuration files
│   │   └── landingConfig.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## License

MIT
