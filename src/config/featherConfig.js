// ============================================
// FEATHER LANDING PAGE CONFIGURATION
// ============================================
// Custom configuration for Feather product
// Based on the base landingConfig template

export const featherConfig = {
  // ============================================
  // HEADER / NAVIGATION SECTION
  // ============================================
  header: {
    enabled: true,

    // Logo Configuration
    logo: "/feather-owl-navy-pink.png",
    logoText: "Feather",
    logoAlt: "Feather Owl Logo",
    logoHeight: "h-12",

    // Navigation Links
    navLinks: [
      { text: "How it works", link: "#how" },
      { text: "Why Feather", link: "#why" },
      { text: "Integrations", link: "#integrations" },
    ],

    // Help Link
    helpLink: {
      enabled: false,
      text: "Help!",
      link: "#help",
    },

    // CTA Button
    ctaButton: {
      enabled: true,
      text: "Join waitlist",
      link: "#waitlist",
    },

    // Styling
    styles: {
      navContainerBg: "bg-white",
      navContainerWidth: "w-auto",
      navTextColor: "text-slate-900",
      navHoverColor: "hover:text-fuchsia-600",
      helpLinkColor: "text-slate-700",
      helpLinkHover: "hover:text-slate-900",
      ctaButtonBg: "bg-fuchsia-500",
      ctaButtonHover: "hover:bg-fuchsia-400",
      ctaButtonText: "text-white",
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    // Badge
    badge: {
      enabled: true,
      text: "Early Access",
      bgColor: "bg-fuchsia-50",
      borderColor: "border-fuchsia-200",
      textColor: "text-fuchsia-700",
    },

    // Main Content
    title: "Labeling isn't the hard part. Trusting your labels is.",
    subtitle:
      "Feather turns LLM-assisted labeling into a controlled, auditable workflow — with versioned schemas, human approvals, and reproducible exports.",
    
    // Text Colors (for dark backgrounds)
    titleColor: "text-white",
    subtitleColor: "text-slate-200",

    // Email Signup Configuration
    showEmailSignup: true,
    emailSignup: {
      placeholder: "Work email",
      buttonText: "Join the waitlist",
      successMessage: "You're in. We'll reach out when early access opens.",
      // apiEndpoint: "https://your-api.com/api/subscribe",
    },

    // Alternative: Action Buttons
    primaryButton: {
      enabled: false,
      text: "Get Started",
      link: "#get-started",
      bgColor: "bg-slate-950",
      textColor: "text-white",
      hoverBg: "hover:bg-slate-900",
    },
    secondaryButton: {
      enabled: false,
      text: "Learn More",
      link: "#learn-more",
      borderColor: "border-slate-300",
      textColor: "text-slate-700",
      hoverBg: "hover:bg-slate-50",
    },

    // Background Configuration
    backgroundImage: null,
    backgroundOverlay: "bg-black/20",

    // Right Side Image
    rightImage: "/screens/feather-labeling-workspace.png",
    rightImageAlt: "Feather labeling workspace",
    rightImageWidth: "w-[40%]",

    // Background Gradient
    gradient: {
      from: "from-slate-950",
      to: "to-slate-900",
    },

    // More? Scroll Indicator
    scrollIndicator: {
      enabled: true,
      text: "See how it works",
      textColor: "text-slate-100",
      textSize: "text-sm",
      curveColor: "#FFFFFF", // White background
      curveWidth: 320,
      curveHeight: 20,
      arrowColor: "text-slate-950", // Dark navy to match hero background
      arrowSize: "w-3.5 h-3.5",
    },

    // Background Animations
    animations: {
      enabled: true,
      // Floating Geometric Shapes
      geometricShapes: {
        enabled: true,
        shapes: [
          { type: "circle", size: 54, x: 12, y: 18, duration: 28, delay: 0.5, opacity: 0.5, color: "#EC4899" },
          { type: "triangle", size: 48, x: 62, y: 22, duration: 30, delay: 1.2, opacity: 0.45, color: "#EC4899" },
          { type: "hexagon", size: 56, x: 86, y: 48, duration: 34, delay: 2.0, opacity: 0.5, color: "#EC4899" },
          { type: "circle", size: 44, x: 76, y: 74, duration: 26, delay: 2.6, opacity: 0.48, color: "#EC4899" },
          { type: "hexagon", size: 46, x: 22, y: 70, duration: 32, delay: 1.8, opacity: 0.45, color: "#EC4899" },
        ],
      },
      // Text Entrance Animation
      textAnimation: {
        enabled: true,
        duration: 800,
        delay: 180,
      },
      // Right Image Animation
      imageAnimation: {
        enabled: true,
        type: "float",
        intensity: "subtle",
      },
    },

    // Optional: Custom email submit handler
    // onEmailSubmit: async (email) => { /* your API call here */ },
  },

  // ============================================
  // FEATURES / "WHAT'S COMING" SECTION
  // ============================================
  features: {
    enabled: true,

    // Section Title
    title: "Why Feather",
    highlightWord: "Feather",
    subtitle: "Labels become decisions you can trust, explain, and reproduce.",

    // Styling
    styles: {
      backgroundColor: "bg-white",
      titleColor: "text-slate-950",
      subtitleColor: "text-slate-600",
      highlightColor: "text-fuchsia-500",
      decorationColor: "bg-fuchsia-100",
      decorationOpacity: "opacity-25",
    },

    // Feature Items
    items: [
      {
        title: "LLM suggestions, human control",
        name: "LLM suggestions, human control",
        description:
          "LLMs pre-label fast. Humans approve/edit with required rationale on overrides — no silent drift.",
        avatar: null,
        role: "Human-in-the-loop",
        platform: null,
        special: true,
        badge: "Core",
      },
      {
        title: "Versioned label definitions",
        name: "Versioned label definitions",
        description:
          "Schemas evolve on purpose. Track meaning changes and link them to every label update.",
        avatar: null,
        role: "Schema & governance",
        platform: null,
        special: false,
        badge: null,
      },
      {
        title: "Dataset diffs & audit trail",
        name: "Dataset diffs & audit trail",
        description:
          "See what changed, who approved it, and why — down to per-record before/after and comments.",
        avatar: null,
        role: "Traceability",
        platform: null,
        special: false,
        badge: null,
      },
      {
        title: "Reproducible training exports",
        name: "Reproducible training exports",
        description:
          "Export clean, approved datasets with schema version + hashes — so models stay debuggable.",
        avatar: null,
        role: "Reproducibility",
        platform: null,
        special: false,
        badge: null,
      },
    ],

    // Card Styling
    cardStyles: {
      defaultBg: "bg-white",
      defaultBorder: "border-slate-200/70",
      defaultHoverBorder: "hover:border-fuchsia-200",
      specialBg: "bg-fuchsia-50/60",
      specialBorder: "border-fuchsia-200",
      badgeBg: "bg-fuchsia-500",
      badgeText: "text-white",
      titleColor: "text-slate-950",
      roleColor: "text-slate-500",
      descriptionColor: "text-slate-600",
      platformColor: "text-slate-400",
    },

    // Avatar Gradient Colors
    avatarGradients: [
      { from: "from-slate-950", to: "to-fuchsia-500" },
      { from: "from-slate-900", to: "to-fuchsia-400" },
    ],
  },

  // ============================================
  // CALL TO ACTION SECTION
  // ============================================
  cta: {
    enabled: true,

    title: "Join the waitlist",
    subtitle: "Early access for research & ML teams who care about label trust.",

    showEmailSignup: true,
    emailSignup: {
      placeholder: "Work email",
      buttonText: "Request early access",
      successMessage: "Got it — we'll reach out with next steps.",
    },

    // Alternative: Button
    button: {
      enabled: false,
      text: "Get Started",
      link: "#get-started",
    },

    // Styling
    styles: {
      backgroundColor: "bg-slate-950",
      titleColor: "text-white",
      subtitleColor: "text-slate-300",
      buttonBg: "bg-fuchsia-500",
      buttonText: "text-white",
      buttonHover: "hover:bg-fuchsia-400",
    },

    // Background Animations
    animations: {
      enabled: true,
      // Floating Geometric Shapes
      geometricShapes: {
        enabled: true,
        shapes: [
          { type: "circle", size: 52, x: 12, y: 24, duration: 26, delay: 0.2, opacity: 0.16, color: "#EC4899" },
          { type: "triangle", size: 54, x: 82, y: 52, duration: 30, delay: 1.4, opacity: 0.14, color: "#EC4899" },
          { type: "hexagon", size: 50, x: 36, y: 74, duration: 34, delay: 2.8, opacity: 0.12, color: "#EC4899" },
        ],
      },
    },

    // Optional: Custom email submit handler
    // onEmailSubmit: async (email) => { /* your API call here */ },
  },

  // ============================================
  // FOOTER SECTION
  // ============================================
  footer: {
    enabled: false,
    companyName: "Feather",
    tagline: "Human judgment, preserved.",
    links: [
      { text: "Privacy", link: "#privacy" },
      { text: "Contact", link: "#contact" },
    ],
    social: [
      { name: "LinkedIn", link: "#", icon: "💼" },
      { name: "GitHub", link: "#", icon: "💻" },
    ],
    copyright: "© 2026 Feather. All rights reserved.",
  },
}
