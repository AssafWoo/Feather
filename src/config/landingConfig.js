// Customize your landing page here
export const landingConfig = {
  // Hero Section
  hero: {
    title: "Welcome to Our Amazing Product",
    subtitle: "Build something incredible with our platform",
    primaryButton: {
      text: "Get Started",
      link: "#",
    },
    secondaryButton: {
      text: "Learn More",
      link: "#",
    },
    backgroundImage: null, // Add image URL or leave null for gradient
  },

  // Features Section
  features: {
    enabled: true,
    title: "Why Choose Us",
    subtitle: "Discover what makes us different",
    items: [
      {
        title: "Fast & Reliable",
        description: "Lightning-fast performance with 99.9% uptime guarantee",
        icon: "⚡",
      },
      {
        title: "Easy to Use",
        description: "Intuitive interface that anyone can master in minutes",
        icon: "🎯",
      },
      {
        title: "Secure",
        description: "Enterprise-grade security to protect your data",
        icon: "🔒",
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock assistance whenever you need it",
        icon: "💬",
      },
    ],
  },

  // Call to Action Section
  cta: {
    enabled: true,
    title: "Ready to Get Started?",
    subtitle: "Join thousands of satisfied customers today",
    button: {
      text: "Start Free Trial",
      link: "#",
    },
  },

  // Footer
  footer: {
    enabled: true,
    companyName: "Your Company",
    tagline: "Building the future, one landing page at a time",
    links: [
      { text: "About", link: "#" },
      { text: "Features", link: "#" },
      { text: "Pricing", link: "#" },
      { text: "Contact", link: "#" },
    ],
    social: [
      { name: "Twitter", link: "#", icon: "🐦" },
      { name: "LinkedIn", link: "#", icon: "💼" },
      { name: "GitHub", link: "#", icon: "💻" },
    ],
    copyright: "© 2024 Your Company. All rights reserved.",
  },
}
