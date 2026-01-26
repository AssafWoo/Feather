import { 
  SiPostgresql, 
  SiMongodb, 
  SiKubernetes,
  SiGooglecloud, 
  SiTypescript, 
  SiPython, 
  SiDocker, 
  SiApachekafka 
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import { FaAws } from 'react-icons/fa'

// ============================================
// PLAIN LANDING PAGE CONFIGURATION
// ============================================
// Data Readiness & Semantics for LLM Training
// From raw data to LLM-ready training sets — with meaning included
// Based on the base landingConfig template

export const plainConfig = {
  // ============================================
  // HEADER / NAVIGATION SECTION
  // ============================================
  header: {
    enabled: true,

    // Logo Configuration
    logo: "/plain/logo.png",
    logoText: "Plain",
    logoAlt: "Plain - Turn Legacy Data Into an AI-Ready Foundation",
    logoHeight: "h-12",

    // Navigation Links
    navLinks: [
      { text: "How it works", link: "#workflow" },
      { text: "What you get", link: "#features" },
      { text: "Why", link: "#integrations" },
      { text: "FAQ", link: "#faq" },
    ],

    // Help Link
    helpLink: {
      enabled: false,
      text: "See how it works",
      link: "#workflow",
    },

    // CTA Button
    ctaButton: {
      enabled: true,
      text: "Join waitlist",
      link: "#cta",
    },

    // Styling - Glassy header
    styles: {
      navContainerBg: "bg-white/80 backdrop-blur-md shadow-sm shadow-slate-200/50",
      navContainerWidth: "w-auto",
      navTextColor: "text-slate-700",
      navHoverColor: "hover:text-[#7C3AED]",
      helpLinkColor: "text-slate-600",
      helpLinkHover: "hover:text-slate-900",
      ctaButtonBg: "bg-[#7C3AED]",
      ctaButtonHover: "hover:bg-[#6D28D9]",
      ctaButtonText: "text-white",
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  // UX Strategy: Lead with outcome, not process
  // The closing line from the one-pager is actually the strongest headline
  hero: {
    // Layout: 'split' (default) or 'centered'
    layout: "centered",
    
    // Top padding to move content down
    topPadding: "4rem",
    // Top margin for left text content (only used in split layout)
    contentTopMargin: "3rem",
    
    // Floating Content Box (for centered layout)
    contentBox: {
      enabled: true,
      bg: "bg-white/80 backdrop-blur-md",
      shadow: "shadow-xl shadow-slate-200/50",
      border: "border border-white/60",
      rounded: "rounded-3xl",
      padding: "px-10 py-12 sm:px-16 sm:py-16",
      // Brand watermark in corner
      brandName: "Plain",
      brandAccentColor: "#7C3AED",
    },
    
    // Badge - positions the product category + key trust signal
    // Glassy white card style
    badge: {
      enabled: false,
      text: "Connects to your existing code, DBs & pipelines — no rewrites",
      bgColor: "bg-white/70 backdrop-blur-sm",
      borderColor: "border-white/50",
      textColor: "text-[#7C3AED]",
    },

    // Main Content - legacy transformation headline
    title: "Legacy data into an AI-ready foundation.",
    subtitle: "We help organizations take legacy systems — old databases, pipelines, and schemas — and elevate their data to a level LLMs can actually learn from.",
    subtitleLine2: "Connects to your existing code, databases, and pipelines. No rewrites. No replatforming.",
    
    // Text Colors (for light pastel backgrounds)
    titleColor: "text-[#0B1020]",
    subtitleColor: "text-slate-600",

    // Email Signup Configuration
    showEmailSignup: true,
    emailSignup: {
      placeholder: "Work email",
      buttonText: "Let's talk",
      successMessage: "You're in. We'll reach out when early access opens.",
      apiEndpoint: "https://api.plaindataai.com/subscribe",
      align: "left",
    },

    // Alternative: Action Buttons
    primaryButton: {
      enabled: false,
      text: "Let's talk",
      link: "#cta",
      bgColor: "bg-[#7C3AED]",
      textColor: "text-white",
      hoverBg: "hover:bg-[#6D28D9]",
    },
    secondaryButton: {
      enabled: true,
      text: "See how it works",
      link: "#workflow",
      borderColor: "border-slate-300",
      textColor: "text-slate-700",
      hoverBg: "hover:bg-white/50",
    },

    // Background Configuration
    backgroundImage: null,
    backgroundOverlay: "bg-black/20",

    // Right Side Image/Video
    rightImage: null,
    rightVideo: null,
    rightImageAlt: "Plain platform showing semantic schema with versioned meaning, human confirmations, and LLM-ready training data exports",
    rightImageWidth: "w-[60%]",
    imageScale: 1.0,
    imageAspectRatio: "1 / 1.5",
    imagePosition: "center 35%",
    imageTransformOrigin: "center 35%",
    imageMaxHeight: "90vh",
    videoBlendMode: "multiply",
    videoFilter: "brightness(1.1) contrast(1.05)",

    // Background Gradient - Soft pastel gradient (glassy aesthetic)
    // Light lavender to light pink to light mint
    gradient: {
      from: "from-[#F3E8FF]",
      via: "via-[#FCE7F3]",
      to: "to-[#CCFBF1]",
    },

    // More? Scroll Indicator
    scrollIndicator: {
      enabled: true,
      text: "See how",
      textColor: "text-slate-600",
      textSize: "text-sm",
      curveColor: "#FFFFFF",
      curveWidth: 320,
      curveHeight: 20,
      arrowColor: "text-[#7C3AED]",
      arrowSize: "w-3.5 h-3.5",
    },

    // Floating Circles with Icons and Connecting Lines
    // Tech stack icons
    floatingCircles: {
      enabled: true,
      circles: [
        // Top Left
        { id: 'postgres', icon: SiPostgresql, x: 8, y: 15, size: 48, color: '#336791', badge: null, animated: true },
        { id: 'python', icon: SiPython, x: 15, y: 28, size: 40, color: '#3776AB', badge: null, animated: false },
        
        // Mid Left
        { id: 'docker', icon: SiDocker, x: 6, y: 50, size: 44, color: '#2496ED', badge: null, animated: true },
        { id: 'typescript', icon: SiTypescript, x: 12, y: 65, size: 36, color: '#3178C6', badge: null, animated: false },
        
        // Bottom Left
        { id: 'mongo', icon: SiMongodb, x: 8, y: 85, size: 42, color: '#47A248', badge: null, animated: true },

        // Top Right
        { id: 'aws', icon: FaAws, x: 92, y: 15, size: 46, color: '#FF9900', badge: null, animated: false },
        { id: 'azure', icon: VscAzure, x: 85, y: 30, size: 40, color: '#0078D4', badge: null, animated: true },

        // Mid Right
        { id: 'k8s', icon: SiKubernetes, x: 94, y: 50, size: 44, color: '#326CE5', badge: null, animated: false },
        { id: 'gcp', icon: SiGooglecloud, x: 88, y: 65, size: 38, color: '#4285F4', badge: null, animated: true },

        // Bottom Right
        { id: 'kafka', icon: SiApachekafka, x: 92, y: 85, size: 42, color: '#231F20', badge: null, animated: false },
      ],
      connections: [], // Connections removed
      styles: {
        circleBg: 'bg-white/90 backdrop-blur-sm',
        circleShadow: 'shadow-lg shadow-slate-200/50',
        lineColor: '#7C3AED',
        lineOpacity: 0.2,
        badgeBg: 'bg-[#7C3AED]',
        badgeText: 'text-white',
      },
    },

    // Background Animations
    // Subtle shapes for glassy pastel background - using deeper purples that show through
    animations: {
      enabled: true,
      // Floating Geometric Shapes - disabled for Plain (using floatingCircles instead)
      geometricShapes: {
        enabled: false,
        shapes: [],
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
  },

  // ============================================
  // PROBLEM SECTION (using workflow section structure)
  // ============================================
  // UX Strategy: Establish pain before presenting solution
  // This creates emotional resonance and qualifies the audience
  problem: {
    enabled: false,
    id: "problem",

    // Section Title
    title: "The problem",
    highlightWord: "problem",
    subtitle: "Most organizations don't have an AI problem. They have a legacy data problem.",
    subtitleLine2: "LLMs don't fail because data is messy. They fail because meaning is implicit, unstable, and undocumented.",

    // Problem points
    items: [
      {
        title: "Legacy fields change intent over time",
        description: "What a column meant last year isn't what it means today.",
      },
      {
        title: "Labels drift silently",
        description: "Definitions evolve in code and conversations, not in the dataset.",
      },
      {
        title: "Training data is reused outside its assumptions",
        description: "Models inherit context they were never designed for.",
      },
      {
        title: "Critical context is buried in legacy code and pipelines",
        description: "The meaning is there — just not where the model can see it.",
      },
    ],

    // Closing statement
    closingStatement: "Layering AI on top of this doesn't help — it amplifies the damage.",

    // Styling - Glassy pastel aesthetic
    styles: {
      backgroundColor: "bg-gradient-to-br from-white via-[#FCE7F3]/20 to-white",
      titleColor: "text-[#0B1020]",
      subtitleColor: "text-slate-500",
      highlightColor: "text-[#7C3AED]",
      itemTitleColor: "text-[#0B1020]",
      itemDescriptionColor: "text-slate-500",
      // Glassy card style for problem items
      cardBg: "bg-white/80 backdrop-blur-sm shadow-md shadow-slate-200/50",
      cardBorder: "border-white/60",
    },
  },

  // ============================================
  // WORKFLOW / "HOW IT WORKS" SECTION
  // ============================================
  // UX Strategy: Show collaboration, not automation fantasy
  // Each step emphasizes human + LLM working together
  workflow: {
    enabled: true,
    
    // Layout type: 'classic' (Feather-style animated timeline) or 'orbital' (Plain-style circle + curved steps)
    layout: "orbital",
    
    // Orbital center configuration (only used when layout is 'orbital')
    orbitalCenter: {
      brandName: "Plain",
      brandAccentColor: "#7C3AED",
      title: "Legacy → AI-Ready",
      description: "We don't replace your systems. We make them usable for modern AI.",
    },

    // Section Title
    title: "How it works",
    highlightWord: "works",
    subtitle: "We meet your systems where they are — and lift them, without rebuilding them.",

    // Workflow Steps - legacy transformation focused
    steps: [
      {
        title: "Connect & Analyze",
        description: "We connect to your legacy databases, pipelines, and application code to understand how data is actually used today — not how it was documented years ago.",
        iconType: "import",
      },
      {
        title: "Confirm Meaning",
        description: "We surface implicit assumptions hidden across old code and pipelines, then work with your engineers and domain owners to make that meaning explicit and durable.",
        iconType: "review",
      },
      {
        title: "Train Safely",
        description: "You get AI-ready, versioned training data grounded in your real systems — not fragile abstractions built for demos.",
        iconType: "export",
      },
    ],

    // Foundational Layer - Core value prop
    foundationalLayer: {
      enabled: true,
      items: [
        {
          title: "Better context in",
          description: "Explicit meaning",
        },
        {
          title: "Better behavior out",
          description: "Grounded models",
        },
      ],
    },

    // Feedback Loops
    feedbackLoops: {
      enabled: false,
      loops: [],
    },

    // Styling - Glassy pastel aesthetic
    styles: {
      backgroundColor: "bg-gradient-to-br from-[#F3E8FF]/50 via-white to-[#CCFBF1]/50",
      titleColor: "text-[#0B1020]",
      subtitleColor: "text-slate-500",
      highlightColor: "text-[#7C3AED]",
      decorationColor: "bg-[#7C3AED]",
      decorationOpacity: "opacity-5",
      // Grid box container - glassy white cards
      cardBg: "bg-white/80 backdrop-blur-sm shadow-lg shadow-slate-200/50",
      cardBorder: "border border-white/60",
      // Timeline
      lineColor: "bg-gradient-to-r from-[#7C3AED] to-[#14B8A6]",
      // Step circles
      activeCircleBg: "bg-gradient-to-br from-[#7C3AED] to-[#A78BFA]",
      activeCircleText: "text-white",
      // Step text
      stepNumberColor: "text-[#7C3AED]",
      stepTitleColor: "text-[#0B1020]",
      stepDescriptionColor: "text-slate-500",
    },
  },

  // ============================================
  // FEATURES / "WHAT YOU GET" SECTION
  // ============================================
  // UX Strategy: Tangible outputs, not abstract benefits
  // These are assets, not dashboards — this is key differentiation
  features: {
    enabled: true,
    
    // Layout type: 'classic' (Feather-style with illustration) or 'glassy' (Plain-style glassy card)
    layout: "glassy",

    // Section Title
    title: "What you get",
    highlightWord: "get",
    subtitle: "These are assets, not dashboards.",

    // Badge Configuration
    badge: {
      enabled: true,
      text: "Tangible outputs",
      bgColor: "bg-[#7C3AED]",
      textColor: "text-white",
    },

    // Illustration Configuration
    illustration: {
      enabled: true,
      type: "generated",
      imageSrc: null,
      imageAlt: "Feature illustration",
      primaryColor: "#7C3AED", // Violet
      secondaryColor: "#14B8A6", // Teal
      tertiaryColor: "#A78BFA", // Light violet
    },

    // Styling - Glassy pastel aesthetic
    styles: {
      backgroundColor: "bg-gradient-to-br from-white via-[#F3E8FF]/30 to-[#CCFBF1]/30",
      titleColor: "text-[#0B1020]",
      subtitleColor: "text-slate-500",
      highlightColor: "text-[#7C3AED]",
      // Icon box styling - glassy
      iconBorderColor: "border-slate-200/80",
      iconHoverBorderColor: "hover:border-[#7C3AED]/50",
      iconHoverBgColor: "hover:bg-white",
      // Feature item styling
      featureTitleColor: "text-[#0B1020]",
      featureTitleHoverColor: "group-hover:text-[#7C3AED]",
      featureDescriptionColor: "text-slate-500",
    },

    // Feature Items - Tangible outputs with legacy transformation angle
    items: [
      {
        title: "LLM-ready datasets",
        description:
          "Built directly from legacy systems, with meaning preserved and made explicit. Your models train on data that understands its own context.",
        icon: "/plain/icons/dataset.svg",
      },
      {
        title: "Versioned semantic schemas",
        description:
          "Capture how legacy fields actually evolved — not how they were supposed to. Track the intent and assumptions behind every version so you can audit model behavior over time.",
        icon: "/plain/icons/version.svg",
      },
      {
        title: "Safe-to-train signals",
        description:
          "Know when legacy assumptions are too broken to train on. Automated quality checks provide clear go/no-go signals for reliable training.",
        icon: "/plain/icons/shield.svg",
      },
      {
        title: "Reproducible exports",
        description:
          "Turn decades of data into training assets you can finally trust. Export in standard formats with full lineage metadata to trace any model output back to its source.",
        icon: "/plain/icons/export.svg",
      },
    ],
  },

  // ============================================
  // BENEFITS SECTION (repurposed from integrations)
  // ============================================
  // UX Strategy: Bridge features to outcomes
  // Show how tangible outputs translate to better LLMs
  integrations: {
    enabled: true,
    layout: "radial",

    // Section Title
    title: "How this helps train better LLMs",
    highlightWord: "better",
    subtitle: "Before building agents, copilots, or workflows — your data needs to be ready.",
    closingStatement: "AI doesn't fail because it's weak. It fails because it's trained on unstable foundations.",

    // Styling - Glassy pastel aesthetic
    styles: {
      backgroundColor: "bg-gradient-to-br from-[#CCFBF1]/30 via-white to-[#F3E8FF]/30",
      titleColor: "text-[#0B1020]",
      subtitleColor: "text-slate-500",
      highlightColor: "text-[#14B8A6]",
      decorationColor: "bg-[#14B8A6]",
      decorationOpacity: "opacity-5",
    },

    // Benefit Items
    items: [
      {
        name: "Prevents training on broken meaning",
        category: "Data Quality",
        description: "Stop training on outdated assumptions and silently drifted labels. Know what your data actually represents.",
        icon: "/plain/icons/shield.svg",
      },
      {
        name: "Aligns training, eval, and inference",
        category: "Consistency",
        description: "Same semantics everywhere. No more behavior differences because training and inference understood data differently.",
        icon: "/plain/icons/align.svg",
      },
      {
        name: "Reduces hallucination",
        category: "Model Quality",
        description: "Models hallucinate when context is missing. Give them the meaning they were missing.",
        icon: "/plain/icons/brain.svg",
      },
      {
        name: "Makes training reproducible",
        category: "Debugging",
        description: "Reproduce any training run months later. Debug model behavior by tracing back to exact semantics.",
        icon: "/plain/icons/refresh.svg",
      },
    ],

    // Card Styling - Glassy white cards
    cardStyles: {
      defaultBg: "bg-white/80 backdrop-blur-sm shadow-lg shadow-slate-200/50",
      defaultBorder: "border-white/60",
      defaultHoverBorder: "hover:border-[#14B8A6]/30",
      titleColor: "text-[#0B1020]",
      descriptionColor: "text-slate-500",
    },
  },

  // ============================================
  // CALL TO ACTION SECTION
  // ============================================
  // UX Strategy: Echo the headline, provide clear next step
  // Strong emotional hook + low-friction action
  cta: {
    enabled: true,

    title: "Make your legacy data useful for AI.",
    subtitle: "Before agents. Before workflows. Start with data that knows what it means.",

    showEmailSignup: true,
    emailSignup: {
      placeholder: "Work email",
      buttonText: "Join the waitlist",
      successMessage: "You're in. We'll reach out when early access opens.",
      apiEndpoint: "https://api.plaindataai.com/subscribe",
    },

    // Alternative: Button
    button: {
      enabled: false,
      text: "Join the waitlist",
      link: "#cta",
    },

    // Styling - Glassy pastel aesthetic (reversed gradient for visual interest)
    styles: {
      backgroundColor: "bg-gradient-to-br from-[#CCFBF1]/50 via-white to-[#F3E8FF]/50",
      titleColor: "text-[#0B1020]",
      subtitleColor: "text-slate-500",
      buttonBg: "bg-[#7C3AED]",
      buttonText: "text-white",
      buttonHover: "hover:bg-[#6D28D9]",
    },

    // Background Animations - Subtle for light background
    animations: {
      enabled: true,
      // Floating Geometric Shapes
      geometricShapes: {
        enabled: true,
        shapes: [
          { type: "circle", size: 70, x: 10, y: 20, duration: 16, delay: 0.2, opacity: 0.12, color: "#7C3AED" },
          { type: "circle", size: 50, x: 85, y: 60, duration: 18, delay: 1.4, opacity: 0.1, color: "#14B8A6" },
          { type: "circle", size: 60, x: 30, y: 70, duration: 20, delay: 2.8, opacity: 0.08, color: "#7C3AED" },
          { type: "circle", size: 40, x: 70, y: 25, duration: 14, delay: 0.8, opacity: 0.12, color: "#14B8A6" },
        ],
      },
    },
  },

  // ============================================
  // FAQ SECTION
  // ============================================
  // UX Strategy: Address objections and differentiate
  // "What this is not" questions are key for positioning
  faq: {
    enabled: true,

    // Section Title
    title: "Frequently Asked Questions",
    highlightWord: "Questions",
    subtitle: "Everything you need to know about Plain",

    // Styling - Glassy pastel aesthetic
    styles: {
      backgroundColor: "bg-gradient-to-br from-[#F3E8FF]/30 via-white to-[#CCFBF1]/30",
      titleColor: "text-[#0B1020]",
      subtitleColor: "text-slate-500",
      highlightColor: "text-[#7C3AED]",
      decorationColor: "bg-[#7C3AED]",
      decorationOpacity: "opacity-5",
      cardBg: "bg-white/80 backdrop-blur-sm shadow-md shadow-slate-200/50",
      cardBorder: "border-white/60",
      cardActiveBorder: "border-[#7C3AED]/50",
      questionColor: "text-[#0B1020]",
      answerColor: "text-slate-500",
      iconColor: "text-slate-400",
    },

    // FAQ Items
    items: [
      // Strategic positioning question first
      {
        question: "Why not just build agents on top of our data?",
        answer:
          "Agents amplify whatever data they sit on. If meaning is implicit, outdated, or inconsistent, agents don't help — they just fail faster. We focus on making your data AI-ready first, so anything you build on top actually works."
      },
      // Differentiation questions - "What this is not"
      {
        question: "Is this a data warehouse or data catalog?",
        answer:
          "No. We don't store or organize your data. We add a semantics layer on top of your existing infrastructure that captures what your data means — so it's safe to train LLMs on."
      },
      {
        question: "Is this a labeling tool?",
        answer:
          "No. We don't label data. We document meaning — what fields represent, when they're valid, and which assumptions they rely on. This is infrastructure for grounded LLM training, not annotation."
      },
      {
        question: "Are LLMs making decisions about our data?",
        answer:
          "No. LLMs propose interpretations based on usage patterns. Humans always confirm meaning before it becomes truth. We help surface understanding at scale — humans define what's real."
      },
      // How it works questions
      {
        question: "What exactly do LLMs analyze?",
        answer:
          "Only structural and behavioral artifacts: schemas, data pipelines, validation logic, and application code. They infer how data is actually treated — not business intent on their own."
      },
      {
        question: "What happens if the LLM is wrong?",
        answer:
          "That's expected. Proposals are hypotheses, not facts. Engineers, data scientists, or domain owners review and approve everything. Nothing becomes truth without human judgment."
      },
      {
        question: "Does this require changing our code or pipelines?",
        answer:
          "No. We connect to your existing databases, code repositories, and pipelines as read-only observers. We document meaning — we don't rewrite infrastructure. Your systems stay exactly as they are."
      },
      // Trust and safety
      {
        question: "Is this safe for sensitive systems?",
        answer:
          "Yes. The system assists understanding — it doesn't automate control. Humans remain the source of truth. We're designed for teams shipping AI into real systems."
      },
      // Target audience
      {
        question: "Who is this for?",
        answer:
          "Teams training LLMs on internal data. Companies shipping AI into real systems. Anyone tired of retraining models without knowing why. If your data feeds decisions, this is for you."
      },
    ],
  },

  // ============================================
  // FOOTER SECTION
  // ============================================
  footer: {
    enabled: false,
    companyName: "Plain",
    tagline: "We don't replace legacy systems — we elevate them to an AI-ready state.",
    links: [
      { text: "Privacy", link: "#privacy" },
      { text: "Contact", link: "#contact" },
    ],
    social: [
      { name: "LinkedIn", link: "#", icon: "💼" },
      { name: "GitHub", link: "#", icon: "💻" },
    ],
    copyright: "© 2026 Plain. All rights reserved.",
    // Styling would use: bg-[#0B1020], text-[#A0AEC0], accent-[#B794F4]
  },

  // ============================================
  // ANALYTICS CONFIGURATION
  // ============================================
  analytics: {
    enabled: false, // Set to true and add your GTM ID to enable
    gtmContainerId: '',
    ga4MeasurementId: '',
  },

  // ============================================
  // SEO CONFIGURATION
  // ============================================
  seo: {
    title: "Plain - Turn Legacy Data Into an AI-Ready Foundation",
    description: "We help organizations transform legacy systems — old databases, pipelines, and schemas — into AI-ready foundations. Before agents. Fix the data.",
    favicon32: "/plain/plain-favicon-32.png",
    favicon16: "/plain/plain-favicon-16.png",
    appleTouchIcon: "/plain/logo.png",
    ogTitle: "Plain - Turn Legacy Data Into an AI-Ready Foundation",
    ogDescription: "We don't replace legacy systems — we elevate them to an AI-ready state.",
    ogImage: "https://plaindataai.com/plain/logo.png",
    ogUrl: "https://plaindataai.com",
    twitterTitle: "Plain - Legacy Data to AI-Ready Foundation",
    twitterDescription: "Before agents, fix the data. We help organizations transform legacy systems into AI-ready foundations.",
    twitterImage: "https://plaindataai.com/plain/logo.png",
    canonicalUrl: "https://plaindataai.com",
  },
}
