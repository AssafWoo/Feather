// ============================================
// COMPREHENSIVE LANDING PAGE CONFIGURATION
// ============================================
// 
// This is a fully configurable landing page template.
// Customize everything for your product/company by editing the values below.
//
// CONFIGURATION GUIDE:
// - All text, images, colors, and styles can be customized
// - Set 'enabled: false' to hide any section
// - Colors use Tailwind CSS classes (e.g., 'bg-blue-500', 'text-white')
// - Image paths can be URLs or relative paths from the public folder
// - Leave values as null to use defaults or hide elements
//
// ============================================

export const landingConfig = {
  // ============================================
  // HEADER / NAVIGATION SECTION
  // ============================================
  header: {
    enabled: true,
    
    // Logo Configuration
    logo: null, // Image URL for logo (e.g., "/logo.png")
    logoText: "Logo", // Text to display if no logo image
    logoAlt: "Company Logo",
    logoHeight: "h-8", // Tailwind height class
    
    // Navigation Links
    navLinks: [
      { text: "Home", link: "#" },
      { text: "About Us", link: "#about" },
      { text: "Services", link: "#services" },
      { text: "Our Team", link: "#team" },
    ],
    
    // Help Link
    helpLink: {
      enabled: true,
      text: "Help!",
      link: "#help",
    },
    
    // CTA Button
    ctaButton: {
      enabled: true,
      text: "Contact Us",
      link: "#contact",
    },
    
    // Styling
    styles: {
      navContainerBg: "bg-gray-900", // Dark nav container background
      navContainerWidth: "w-1/2", // Width of dark nav container
      navTextColor: "text-white", // Navigation link text color
      navHoverColor: "hover:text-gray-300", // Navigation link hover color
      helpLinkColor: "text-gray-900", // Help link text color
      helpLinkHover: "hover:text-gray-700", // Help link hover color
      ctaButtonBg: "bg-amber-500", // CTA button background
      ctaButtonHover: "hover:bg-amber-600", // CTA button hover
      ctaButtonText: "text-white", // CTA button text color
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    // Badge (optional)
    badge: {
      enabled: true,
      text: "Coming Soon",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-200",
      textColor: "text-gray-700",
    },
    
    // Main Content
    title: "Something Amazing is Coming",
    subtitle: "Be among the first to experience our revolutionary product. Join the waitlist for early access.",
    
    // Email Signup Configuration
    showEmailSignup: true,
    emailSignup: {
      placeholder: "Enter your email",
      buttonText: "Join Waitlist",
      successMessage: "Thanks! We'll notify you when we launch.",
    },
    
    // Alternative: Action Buttons (if showEmailSignup is false)
    primaryButton: {
      enabled: false,
      text: "Get Started",
      link: "#get-started",
      bgColor: "bg-gray-900",
      textColor: "text-white",
      hoverBg: "hover:bg-gray-800",
    },
    secondaryButton: {
      enabled: false,
      text: "Learn More",
      link: "#learn-more",
      borderColor: "border-gray-300",
      textColor: "text-gray-700",
      hoverBg: "hover:bg-gray-50",
    },
    
    // Background Configuration
    backgroundImage: null, // Image URL for background, or null for gradient
    backgroundOverlay: "bg-black/20", // Overlay when using background image
    
    // Right Side Image
    rightImage: null, // Image URL for right side (35% width)
    rightImageAlt: "Hero Image",
    rightImageWidth: "w-[35%]", // Width of right image container
    
    // Background Gradient (when no backgroundImage)
    gradient: {
      from: "from-slate-50",
      to: "to-gray-100",
    },
    
    // More? Scroll Indicator
    scrollIndicator: {
      enabled: true,
      text: "More?",
      textColor: "text-gray-900",
      textSize: "text-sm",
      curveColor: "#111827", // Dark gray for the bell curve
      curveWidth: 320, // Width in pixels
      curveHeight: 20, // Height in pixels
      arrowColor: "text-white",
      arrowSize: "w-3.5 h-3.5",
    },
    
    // Background Animations
    animations: {
      enabled: true,
      // Floating Geometric Shapes
      geometricShapes: {
        enabled: true,
        shapes: [
          // Circles - spread evenly across viewport
          { type: "circle", size: 50, x: 10, y: 20, duration: 25, delay: 1, opacity: 0.3, color: "#ec4899" },
          { type: "circle", size: 45, x: 60, y: 50, duration: 28, delay: 3, opacity: 0.28, color: "#ec4899" },
          { type: "circle", size: 40, x: 90, y: 75, duration: 24, delay: 4, opacity: 0.35, color: "#ec4899" },
          
          // Triangles - spread evenly across viewport
          { type: "triangle", size: 50, x: 50, y: 15, duration: 27, delay: 1.5, opacity: 0.28, color: "#ec4899" },
          { type: "triangle", size: 40, x: 20, y: 45, duration: 25, delay: 2.5, opacity: 0.35, color: "#ec4899" },
          { type: "triangle", size: 46, x: 75, y: 80, duration: 24, delay: 5.5, opacity: 0.3, color: "#ec4899" },
          
          // Hexagons - spread evenly across viewport
          { type: "hexagon", size: 50, x: 85, y: 35, duration: 30, delay: 0.8, opacity: 0.35, color: "#ec4899" },
          { type: "hexagon", size: 45, x: 15, y: 65, duration: 32, delay: 1.8, opacity: 0.3, color: "#ec4899" },
          { type: "hexagon", size: 48, x: 40, y: 85, duration: 28, delay: 2.8, opacity: 0.32, color: "#ec4899" },
        ],
      },
      // Text Entrance Animation
      textAnimation: {
        enabled: true,
        duration: 800, // milliseconds
        delay: 200, // milliseconds
      },
      // Right Image Animation
      imageAnimation: {
        enabled: true,
        type: "float", // "float", "pulse", or "none"
        intensity: "subtle", // "subtle", "medium", "strong"
      },
    },
    
    // Optional: Custom email submit handler
    // onEmailSubmit: (email) => { /* your API call here */ },
  },

  // ============================================
  // FEATURES / "WHAT'S COMING" SECTION
  // ============================================
  features: {
    enabled: true,
    
    // Section Title
    title: "What's Coming",
    highlightWord: "Coming", // Word to highlight in accent color
    subtitle: "Here's what you can expect when we launch",
    
    // Styling
    styles: {
      backgroundColor: "bg-white",
      titleColor: "text-gray-900",
      subtitleColor: "text-gray-600",
      highlightColor: "text-amber-500", // Color for highlighted word
      decorationColor: "bg-gray-100", // Background decoration circles
      decorationOpacity: "opacity-20",
    },
    
    // Feature Items
    items: [
      {
        title: "Lightning Fast",
        name: "Lightning Fast", // For avatar fallback
        description: "Built for speed and performance from the ground up. Experience blazing fast load times and seamless interactions.",
        avatar: null, // Image URL for avatar, or null for gradient circle
        role: "Performance Feature",
        platform: null, // Optional: "Via Facebook", "Via Twitter", etc.
        special: false, // Set to true for special highlighted card
        badge: null, // Badge text if special
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
        badge: null,
      },
      {
        title: "Always Improving",
        name: "Always Improving",
        description: "We're constantly adding new features based on your feedback. Your voice shapes our product.",
        avatar: null,
        role: "Growth Feature",
        platform: null,
        special: false,
        badge: null,
      },
    ],
    
    // Card Styling
    cardStyles: {
      defaultBg: "bg-white",
      defaultBorder: "border-gray-100",
      defaultHoverBorder: "hover:border-gray-200",
      specialBg: "bg-gray-50",
      specialBorder: "border-gray-200",
      badgeBg: "bg-amber-500",
      badgeText: "text-white",
      titleColor: "text-gray-900",
      roleColor: "text-gray-500",
      descriptionColor: "text-gray-600",
      platformColor: "text-gray-400",
    },
    
    // Avatar Gradient Colors (when no avatar image)
    avatarGradients: [
      { from: "from-blue-500", to: "to-cyan-500" }, // Left column
      { from: "from-purple-500", to: "to-pink-500" }, // Right column
    ],
  },

  // ============================================
  // CALL TO ACTION SECTION
  // ============================================
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
    
    // Alternative: Button (if showEmailSignup is false)
    button: {
      enabled: false,
      text: "Get Started",
      link: "#get-started",
    },
    
    // Styling
    styles: {
      backgroundColor: "bg-gray-900",
      titleColor: "text-white",
      subtitleColor: "text-gray-300",
      buttonBg: "bg-white",
      buttonText: "text-gray-900",
      buttonHover: "hover:bg-gray-100",
    },
    
    // Background Animations
    animations: {
      enabled: true,
      // Floating Geometric Shapes
      geometricShapes: {
        enabled: true,
        shapes: [
          // Fewer, bold shapes - full opacity
          { type: "circle", size: 45, x: 10, y: 20, duration: 20, delay: 0, opacity: 1.0, color: "#ec4899" },
          { type: "triangle", size: 50, x: 80, y: 60, duration: 25, delay: 2, opacity: 1.0, color: "#ec4899" },
          { type: "hexagon", size: 48, x: 30, y: 75, duration: 30, delay: 4, opacity: 1.0, color: "#ec4899" },
          { type: "circle", size: 40, x: 70, y: 15, duration: 24, delay: 1, opacity: 1.0, color: "#ec4899" },
          { type: "triangle", size: 46, x: 50, y: 50, duration: 27, delay: 3, opacity: 1.0, color: "#ec4899" },
          { type: "hexagon", size: 42, x: 20, y: 40, duration: 28, delay: 5, opacity: 1.0, color: "#ec4899" },
        ],
      },
    },
    
    // Optional: Custom email submit handler
    // onEmailSubmit: (email) => { /* your API call here */ },
  },

  // ============================================
  // FOOTER SECTION
  // ============================================
  footer: {
    enabled: false,
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
