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
    logoAlt: "Feather AI - LLM-Assisted Labeling Platform Logo",
    logoHeight: "h-12",

    // Navigation Links
    navLinks: [
      { text: "How it works", link: "#why" },
      { text: "Why Feather", link: "#why" },
      { text: "Integrations", link: "#integrations" },
      { text: "FAQ", link: "#faq" },
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
    // Top padding to move content down
    topPadding: "4rem", // Adjust this value to move text up/down (e.g., "3rem", "4rem", "5rem")
    // Top margin for left text content (moves text down without affecting section height)
    contentTopMargin: "3rem", // Adjust this to move the left text content down (e.g., "2rem", "3rem", "4rem")
    
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
      apiEndpoint: "https://api.feathersai.app/subscribe",
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

    // Right Side Image/Video
    rightImage: "/images/feather-hero.png", // Image file path
    rightVideo: null, // Set to null to use image instead
    rightImageAlt: "Feather AI labeling workspace interface showing human-in-the-loop data annotation with LLM suggestions, versioned schemas, and audit trails for machine learning teams",
    rightImageWidth: "w-[60%]",
    imageScale: 1.0, // Scale factor to make image bigger (1.0 = 100% size) without affecting layout
    // Image cropping options to focus on the feather
    imageAspectRatio: "1 / 1.5", // Container aspect ratio (width/height) - taller container crops more
    imagePosition: "center 35%", // object-position to center the feather (adjust second value: lower = move up, higher = move down)
    imageTransformOrigin: "center 35%", // Transform origin to match image position
    imageMaxHeight: "90vh", // Maximum height to prevent overflow
    // Video styling options for white background handling
    // For white background videos on dark backgrounds, try:
    // - "multiply" (darkens white, good for white backgrounds)
    // - "screen" (brightens, good for dark videos on light backgrounds)
    // - "overlay" (combines multiply and screen)
    // - "normal" (no blending)
    videoBlendMode: "multiply", // Best for white backgrounds on dark
    videoFilter: "brightness(1.1) contrast(1.05)", // Adjust to fine-tune appearance

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
          { type: "circle", size: 54, x: 12, y: 18, duration: 14, delay: 0.5, opacity: 0.5, color: "#EC4899" },
          { type: "triangle", size: 48, x: 62, y: 22, duration: 15, delay: 1.2, opacity: 0.45, color: "#EC4899" },
          { type: "hexagon", size: 56, x: 86, y: 48, duration: 17, delay: 2.0, opacity: 0.5, color: "#EC4899" },
          { type: "circle", size: 44, x: 76, y: 74, duration: 13, delay: 2.6, opacity: 0.48, color: "#EC4899" },
          { type: "hexagon", size: 46, x: 22, y: 70, duration: 16, delay: 1.8, opacity: 0.45, color: "#EC4899" },
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
        icon: "/icons/brain.svg",
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
        icon: "/icons/version.svg",
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
        icon: "/icons/audit.svg",
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
        icon: "/icons/export.svg",
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
  // INTEGRATIONS SECTION
  // ============================================
  integrations: {
    enabled: true,

    // Section Title
    title: "Recommended Integrations",
    highlightWord: "Integrations",
    subtitle: "Seamlessly connect Feather with your existing ML infrastructure and tools.",

    // Styling
    styles: {
      backgroundColor: "bg-gradient-to-b from-slate-50 to-white",
      titleColor: "text-slate-950",
      subtitleColor: "text-slate-600",
      highlightColor: "text-blue-600",
      decorationColor: "bg-blue-100",
      decorationOpacity: "opacity-15",
    },

    // Integration Items
    items: [
      {
        name: "MLflow",
        category: "Experiment & Artifact Tracking",
        description: "A staple open-source tool for experiment tracking, metadata, and model lifecycle management; great for linking datasets and labels back to runs.",
        icon: "/integrations/mlflow.svg",
      },
      {
        name: "Weights & Biases (W&B)",
        category: "Experiment & Metrics Dashboard",
        description: "Highly popular for tracking experiments, metrics, datasets, and artifacts with rich visualization — commonly used alongside MLflow or as an alternative.",
        icon: "/integrations/wandb.svg",
      },
      {
        name: "DVC (Data Version Control)",
        category: "Data & Pipeline Versioning",
        description: "A Git-based data versioning tool that tracks datasets and models; very useful for reproducibility and linking label changes to specific data versions.",
        icon: "/integrations/dvc.svg",
      },
      {
        name: "lakeFS",
        category: "Git-Like Data Lake Version Control",
        description: "Provides Git-style branching and versioning for object stores (S3, GCS, Azure Blob), enhancing Feather's lineage and reproducibility story.",
        icon: "/integrations/lakefs.svg",
      },
      {
        name: "Apache Airflow",
        category: "Workflow Orchestration",
        description: "One of the most widely used workflow tools for ML and data pipelines; integrates with experimentation tools, storage, and model training pipelines.",
        icon: "/integrations/airflow.svg",
      },
      {
        name: "Kubeflow",
        category: "ML Lifecycle Orchestration on Kubernetes",
        description: "Specifically for Kubernetes-native teams; covers experiment tracking, pipelines, training, and serving — valuable for enterprise ML operations.",
        icon: "/integrations/kubeflow.svg",
      },
    ],

    // Card Styling
    cardStyles: {
      defaultBg: "bg-white",
      defaultBorder: "border-slate-100",
      defaultHoverBorder: "hover:border-slate-200",
      titleColor: "text-slate-950",
      descriptionColor: "text-slate-600",
    },
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
      apiEndpoint: "https://api.feathersai.app/subscribe",
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
          { type: "circle", size: 52, x: 12, y: 24, duration: 13, delay: 0.2, opacity: 1.0, color: "#EC4899" },
          { type: "triangle", size: 54, x: 82, y: 52, duration: 15, delay: 1.4, opacity: 1.0, color: "#EC4899" },
          { type: "hexagon", size: 50, x: 36, y: 74, duration: 17, delay: 2.8, opacity: 1.0, color: "#EC4899" },
          { type: "circle", size: 48, x: 65, y: 18, duration: 14, delay: 0.8, opacity: 1.0, color: "#EC4899" },
          { type: "triangle", size: 46, x: 25, y: 58, duration: 16, delay: 2.2, opacity: 1.0, color: "#EC4899" },
          { type: "hexagon", size: 44, x: 75, y: 80, duration: 14.5, delay: 3.6, opacity: 1.0, color: "#EC4899" },
        ],
      },
    },

    // Optional: Custom email submit handler
    // onEmailSubmit: async (email) => { /* your API call here */ },
  },

  // ============================================
  // FAQ SECTION
  // ============================================
  faq: {
    enabled: true,

    // Section Title
    title: "Frequently Asked Questions",
    highlightWord: "Questions",
    subtitle: "Everything you need to know about Feather",

    // Styling
    styles: {
      backgroundColor: "bg-gradient-to-b from-white to-slate-50",
      titleColor: "text-slate-950",
      subtitleColor: "text-slate-600",
      highlightColor: "text-fuchsia-500",
      decorationColor: "bg-slate-100",
      decorationOpacity: "opacity-20",
      cardBg: "bg-white",
      cardBorder: "border-slate-200",
      cardActiveBorder: "border-fuchsia-300",
      questionColor: "text-slate-900",
      answerColor: "text-slate-600",
      iconColor: "text-slate-400",
    },

    // FAQ Items
    items: [
      {
        question: "What is Feather, exactly?",
        answer: "Feather is a human-in-the-loop system for labeling data when LLMs are involved. It helps teams keep labels consistent, explainable, and reproducible over time — even as models, definitions, and datasets change."
      },
      {
        question: "How is Feather different from labeling tools I already use?",
        answer: "Most labeling tools focus on getting labels done. Feather focuses on trusting those labels later. It treats labels as decisions, not just annotations — preserving who approved them, why they were chosen, which schema version they follow, and what changed over time. This becomes critical once LLMs enter the loop."
      },
      {
        question: "Is Feather replacing my existing stack?",
        answer: "No. Feather is designed to fit into how you already work, not replace it. You keep your storage, experiment tracking, and training pipelines. Feather sits between data → labels → training and makes that boundary reliable."
      },
      {
        question: "Does Feather automatically label data?",
        answer: "Feather can use LLMs to propose labels, but nothing is auto-accepted. Humans always approve, edit, or reject — with rationale captured when decisions change. This is intentional — speed without accountability creates problems later."
      },
      {
        question: "Who is Feather built for?",
        answer: "Feather is built for ML research teams, applied AI teams using LLMs, data scientists training production models, and teams that care about reproducibility and audits. It's not built for crowdsourcing or one-off annotation tasks."
      },
      {
        question: "What happens when label definitions change?",
        answer: "This is one of the core problems Feather solves. Label schemas are versioned explicitly, and changes are tracked. When a definition shifts, Feather shows what labels are affected, explains why changes happened, and keeps old versions accessible. No silent drift."
      },
      {
        question: "Can I see what changed between dataset versions?",
        answer: "Yes. Feather provides dataset diffs, similar to code diffs: what changed, who approved it, and why — down to individual records."
      },
      {
        question: "How does Feather work with MLflow?",
        answer: "Feather can import datasets and context from MLflow runs and artifacts, and keep that lineage attached to labels. This makes it possible to answer 'Which dataset version trained this model?' without guessing."
      },
      {
        question: "Is Feather only for text data?",
        answer: "At first — yes. We're starting with text-based datasets and LLM workflows, where labeling drift and audit pain are most acute. Other modalities may come later, but we're intentionally focused."
      },
      {
        question: "Is Feather production-ready?",
        answer: "Feather is currently in early access. We're onboarding teams carefully to validate real workflows, avoid building generic features, and get the foundations right. If this problem hurts you today, you're exactly who we want to work with."
      },
      {
        question: "When will Feather be available?",
        answer: "We don't have a public launch date yet. Early access will roll out gradually to teams on the waitlist. Joining the waitlist helps us prioritize who to onboard first."
      },
      {
        question: "Will Feather be open source?",
        answer: "Not at the core. Some integrations or components may be open in the future, but Feather itself is a commercial product focused on reliability and long-term maintenance."
      },
      {
        question: "How do I join early access?",
        answer: "Join the waitlist using the form above. We'll reach out when early access opens — no spam, no mass emails."
      },
    ],
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
