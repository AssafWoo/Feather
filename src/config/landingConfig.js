// Customize your landing page here
export const landingConfig = {
  // Header Section
  header: {
    enabled: true,
    logo: null, // Add image URL for logo (e.g., "/logo.png")
    logoText: "Logo", // Text to display if no logo image
    logoAlt: "Company Logo",
    navLinks: [
      { text: "Home", link: "#" },
      { text: "About Us", link: "#about" },
      { text: "Services", link: "#services" },
      { text: "Our Team", link: "#team" },
    ],
    helpLink: {
      text: "Help!",
      link: "#help",
    },
    ctaButton: {
      text: "Contact Us",
      link: "#contact",
    },
  },

  // Hero Section
  hero: {
    badge: "Coming Soon",
    title: "Something Amazing is Coming",
    subtitle: "Be among the first to experience our revolutionary product. Join the waitlist for early access.",
    showEmailSignup: true,
    emailSignup: {
      placeholder: "Enter your email",
      buttonText: "Join Waitlist",
      successMessage: "Thanks! We'll notify you when we launch.",
    },
    // Optional: Custom email submit handler (defaults to console.log)
    // onEmailSubmit: (email) => { /* your API call here */ },
    backgroundImage: null, // Add image URL or leave null for gradient
  },

  // Features Section
  features: {
    enabled: true,
    title: "What's Coming",
    highlightWord: "Coming", // Word to highlight in amber/gold
    subtitle: "Here's what you can expect when we launch",
    items: [
      {
        title: "Lightning Fast",
        name: "Lightning Fast", // For avatar fallback
        description: "Built for speed and performance from the ground up. Experience blazing fast load times and seamless interactions.",
        avatar: null, // Add image URL for avatar, or leave null for gradient circle
        role: "Performance Feature",
        platform: null, // Optional: "Via Facebook", "Via Twitter", etc.
        special: false, // Set to true for special highlighted card
      },
      {
        title: "Intuitive Design",
        name: "Intuitive Design",
        description: "Beautiful and easy to use, no learning curve required. We've designed every interaction with you in mind.",
        avatar: null,
        role: "UX Feature",
        platform: null,
        special: true, // This one will have a special badge
        badge: "Featured",
      },
      {
        title: "Secure by Default",
        name: "Secure by Default",
        description: "Your data and privacy are our top priorities. Enterprise-grade security built into every feature.",
        avatar: null,
        role: "Security Feature",
        platform: null,
        special: false,
      },
      {
        title: "Always Improving",
        name: "Always Improving",
        description: "We're constantly adding new features based on your feedback. Your voice shapes our product.",
        avatar: null,
        role: "Growth Feature",
        platform: null,
        special: false,
      },
    ],
  },

  // Call to Action Section
  cta: {
    enabled: true,
    title: "Get Early Access",
    subtitle: "Join the waitlist and be notified when we launch",
    showEmailSignup: true,
    emailSignup: {
      placeholder: "Enter your email",
      buttonText: "Join Waitlist",
      successMessage: "You're on the list! We'll be in touch soon.",
    },
    // Optional: Custom email submit handler (defaults to console.log)
    // onEmailSubmit: (email) => { /* your API call here */ },
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
