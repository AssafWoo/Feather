// Customize your landing page here
export const landingConfig = {
  // Header Section
  header: {
    enabled: true,
    logo: null, // Add image URL for logo (e.g., "/logo.png")
    logoText: "Logo", // Text to display if no logo image
    logoAlt: "Company Logo",
    navLinks: [
      { text: "Features", link: "#features" },
      { text: "About", link: "#about" },
      { text: "Contact", link: "#contact" },
    ],
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
    subtitle: "Here's what you can expect when we launch",
    items: [
      {
        title: "Lightning Fast",
        description: "Built for speed and performance from the ground up",
        icon: "zap",
      },
      {
        title: "Intuitive Design",
        description: "Beautiful and easy to use, no learning curve required",
        icon: "target",
      },
      {
        title: "Secure by Default",
        description: "Your data and privacy are our top priorities",
        icon: "lock",
      },
      {
        title: "Always Improving",
        description: "We're constantly adding new features based on your feedback",
        icon: "message",
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
