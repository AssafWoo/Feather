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
    logo: "/feather/logo.png",
    logoText: "Feather",
    logoAlt: "Feather AI - LLM-Assisted Labeling Platform Logo",
    logoHeight: "h-12",

    // Navigation Links
    navLinks: [
      { text: "How it works", link: "#workflow" },
      { text: "Why Feather", link: "#why" },
      { text: "Integrations", link: "#integrations" },
      { text: "FAQ", link: "#faq" },
    ],

    // Help Link
    helpLink: {
      enabled: false,
      text: "Want to hear more? Let's talk",
      link: "#cta",
    },

    // CTA Button
    ctaButton: {
      enabled: true,
      text: "Join waitlist",
      link: "#cta",
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
    title: "Training LLMs is continuous.",
    subtitle: "Your labels should remember every decision, change, and training cycle.",
    subtitleLine2: "Feather preserves context across training, retraining, and evaluation.",
    
    // Text Colors (for dark backgrounds)
    titleColor: "text-white",
    subtitleColor: "text-slate-200",

    // Email Signup Configuration
    showEmailSignup: true,
    emailSignup: {
      placeholder: "Want to hear more?",
      buttonText: "Let's talk",
      successMessage: "You're in. We'll reach out when early access opens.",
      apiEndpoint: "https://api.feathersai.app/subscribe",
      align: "left", // "left" or "center"
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
    rightImage: "/feather/images/feather-hero.png", // Image file path
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
  // WORKFLOW / "HOW IT WORKS" SECTION
  // ============================================
  workflow: {
    enabled: true,

    // Section Title
    title: "How it works",
    highlightWord: "works",
    subtitle: "From raw data to trusted, reproducible labels in five steps.",

    // Workflow Steps (Happy Path)
    steps: [
      {
        title: "Import",
        description: "Connect your dataset",
        iconType: "import",
      },
      {
        title: "Define Schema",
        description: "Version your labels",
        iconType: "schema",
      },
      {
        title: "Pre-label",
        description: "LLM suggests labels",
        iconType: "prelabel",
      },
      {
        title: "Review",
        description: "Human approves or edits",
        iconType: "review",
      },
      {
        title: "Export",
        description: "Reproducible output",
        iconType: "export",
      },
    ],

    // Foundational Layer - Persistent system features
    foundationalLayer: {
      enabled: true,
      items: [
        {
          title: "Versioned schemas",
          description: "Track schema evolution",
        },
        {
          title: "Decision history",
          description: "Who approved what",
        },
        {
          title: "Dataset diffs",
          description: "See what changed",
        },
        {
          title: "Audit trail",
          description: "Complete lineage",
        },
      ],
    },

    // Feedback Loops
    feedbackLoops: {
      enabled: true,
      loops: [
        {
          from: "Review",
          to: "Define Schema",
          label: "Schema updates",
        },
        {
          from: "Export",
          to: "Pre-label",
          label: "Iterate",
        },
      ],
    },

    // Styling
    styles: {
      backgroundColor: "bg-slate-50",
      titleColor: "text-slate-950",
      subtitleColor: "text-slate-600",
      highlightColor: "text-fuchsia-500",
      decorationColor: "bg-fuchsia-100",
      decorationOpacity: "opacity-20",
      // Grid box container
      cardBg: "bg-white",
      cardBorder: "border border-slate-200/80",
      // Timeline
      lineColor: "bg-gradient-to-r from-fuchsia-400 to-fuchsia-600",
      // Step circles
      activeCircleBg: "bg-gradient-to-br from-fuchsia-500 to-fuchsia-600",
      activeCircleText: "text-white",
      // Step text
      stepNumberColor: "text-fuchsia-500",
      stepTitleColor: "text-slate-900",
      stepDescriptionColor: "text-slate-500",
    },
  },

  // ============================================
  // FEATURES / "WHY FEATHER" SECTION
  // ============================================
  features: {
    enabled: true,

    // Section Title
    title: "Why Feather",
    highlightWord: "Feather",
    subtitle: "Labels become decisions you can trust, explain, and reproduce.",

    // Badge Configuration
    badge: {
      enabled: true,
      text: "Why Feather",
      bgColor: "bg-fuchsia-500",
      textColor: "text-white",
    },

    // Illustration Configuration
    illustration: {
      enabled: true,
      type: "generated", // "generated" for SVG spiral, "image" for custom image
      imageSrc: null, // Path to custom image if type is "image"
      imageAlt: "Feature illustration",
      // Colors for generated SVG illustration (hex values)
      primaryColor: "#D946EF", // fuchsia-500
      secondaryColor: "#EC4899", // pink-500
      tertiaryColor: "#F472B6", // pink-400
    },

    // Styling
    styles: {
      backgroundColor: "bg-white",
      titleColor: "text-slate-950",
      subtitleColor: "text-slate-600",
      highlightColor: "text-fuchsia-500",
      // Icon box styling
      iconBorderColor: "border-fuchsia-200",
      iconHoverBorderColor: "hover:border-fuchsia-400",
      iconHoverBgColor: "hover:bg-fuchsia-50",
      // Feature item styling
      featureTitleColor: "text-slate-900",
      featureTitleHoverColor: "group-hover:text-fuchsia-600",
      featureDescriptionColor: "text-slate-600",
    },

    // Feature Items
    items: [
      {
        title: "LLM + Human",
        description:
          "LLMs pre-label fast. Humans approve/edit with required rationale on overrides — no silent drift.",
        icon: "/feather/icons/brain.svg",
      },
      {
        title: "Versioned Schemas",
        description:
          "Schemas evolve on purpose. Track meaning changes and link them to every label update.",
        icon: "/feather/icons/version.svg",
      },
      {
        title: "Dataset Diffs",
        description:
          "See what changed, who approved it, and why — down to per-record before/after and comments.",
        icon: "/feather/icons/audit.svg",
      },
      {
        title: "Reproducible Exports",
        description:
          "Export clean, approved datasets with schema version + hashes — so models stay debuggable.",
        icon: "/feather/icons/export.svg",
      },
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
        icon: "/feather/integrations/mlflow.svg",
      },
      {
        name: "Weights & Biases (W&B)",
        category: "Experiment & Metrics Dashboard",
        description: "Highly popular for tracking experiments, metrics, datasets, and artifacts with rich visualization — commonly used alongside MLflow or as an alternative.",
        icon: "/feather/integrations/wandb.svg",
      },
      {
        name: "DVC (Data Version Control)",
        category: "Data & Pipeline Versioning",
        description: "A Git-based data versioning tool that tracks datasets and models; very useful for reproducibility and linking label changes to specific data versions.",
        icon: "/feather/integrations/dvc.svg",
      },
      {
        name: "lakeFS",
        category: "Git-Like Data Lake Version Control",
        description: "Provides Git-style branching and versioning for object stores (S3, GCS, Azure Blob), enhancing Feather's lineage and reproducibility story.",
        icon: "/feather/integrations/lakefs.svg",
      },
      {
        name: "Apache Airflow",
        category: "Workflow Orchestration",
        description: "One of the most widely used workflow tools for ML and data pipelines; integrates with experimentation tools, storage, and model training pipelines.",
        icon: "/feather/integrations/airflow.svg",
      },
      {
        name: "Kubeflow",
        category: "ML Lifecycle Orchestration on Kubernetes",
        description: "Specifically for Kubernetes-native teams; covers experiment tracking, pipelines, training, and serving — valuable for enterprise ML operations.",
        icon: "/feather/integrations/kubeflow.svg",
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
        question: "What problem does Feather actually solve?",
        answer:
          "Feather solves the trust gap that appears when LLMs enter labeling workflows. It helps teams keep labels consistent, explainable, and reproducible over time — even as models, label definitions, and datasets evolve."
      },
      {
        question: "How is Feather different from other labeling tools?",
        answer:
          "Most labeling tools optimize for throughput. Feather optimizes for long-term trust. It preserves who approved each label, why it was chosen, which schema version it followed, and how it changed over time — so labels remain usable months later, not just today."
      },
      {
        question: "Will Feather replace tools like MLflow or my data stack?",
        answer:
          "No. Feather is designed to complement your existing stack. You keep your storage, experiment tracking, and training pipelines. Feather sits at the boundary between data, labels, and training — making that boundary reliable instead of implicit."
      },
      {
        question: "Does Feather auto-label data?",
        answer:
          "Feather can use LLMs to propose labels, but nothing is auto-accepted. Humans always approve, edit, or reject labels. This ensures speed without losing accountability — a key failure mode of fully automated labeling."
      },
      {
        question: "Who is Feather built for?",
        answer:
          "Feather is built for ML and applied AI teams using LLMs in real workflows — not crowdsourcing or one-off annotation jobs. It’s for teams that care about audits, reproducibility, and understanding how a model was trained."
      },
      {
        question: "What happens when label definitions change?",
        answer:
          "Label schemas in Feather are versioned explicitly. When a definition changes, Feather shows exactly which labels are affected, what changed, who approved it, and why. Old versions remain accessible — no silent drift."
      },
      {
        question: "Can I see exactly what changed between dataset versions?",
        answer:
          "Yes. Feather provides dataset diffs similar to code diffs — down to individual records. You can see what changed, who approved it, and the rationale behind each change."
      },
      {
        question: "How does Feather integrate with MLflow?",
        answer:
          "Feather can import datasets and context from MLflow runs and artifacts, and keep that lineage attached to labels. This makes it easy to answer questions like: ‘Which dataset version trained this model?’ without reverse engineering."
      },
      {
        question: "Is Feather only for text data?",
        answer:
          "Initially, yes. We’re starting with text-based datasets and LLM workflows, where labeling drift and audit pain are most acute. We’re intentionally focused rather than building a shallow, generic tool."
      },
      {
        question: "Is Feather production-ready?",
        answer:
          "Feather is in early access. We’re onboarding teams carefully to validate real workflows, avoid unnecessary features, and ensure the core is solid. If this problem is already painful for you, early access is designed for teams like yours."
      },
      {
        question: "How do I get access?",
        answer:
          "Join the waitlist using the form above. We’ll reach out as early access opens — no spam, no mass emails, just direct contact."
      }
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

  // ============================================
  // ANALYTICS CONFIGURATION
  // ============================================
  analytics: {
    enabled: true, // Set to true to enable Google Tag Manager
    // Google Tag Manager Container ID
    // Format: GTM-XXXXXXX
    gtmContainerId: 'GTM-PH7R9KK2',
    // Google Analytics 4 Measurement ID (configure in GTM, not loaded directly)
    // Format: G-XXXXXXXXXX
    ga4MeasurementId: 'G-WYBEDD4680', // For reference - configure GA4 tag in GTM with this ID
  },

  // ============================================
  // SEO CONFIGURATION
  // ============================================
  seo: {
    title: "Feather - LLM-Assisted Labeling with Human Oversight",
    description: "Trusted, auditable LLM-assisted labeling workflow with versioned schemas, human approvals, and reproducible exports. Training LLMs is continuous — your labels should remember every decision.",
    favicon32: "/feather/feather-favicon-32.png",
    favicon16: "/feather/feather-favicon-16.png",
    appleTouchIcon: "/feather/logo.png",
    ogTitle: "Feather - LLM-Assisted Labeling with Human Oversight",
    ogDescription: "Trusted, auditable LLM-assisted labeling workflow with versioned schemas, human approvals, and reproducible exports.",
    ogImage: "https://feathersai.app/feather/logo.png",
    ogUrl: "https://feathersai.app",
    twitterTitle: "Feather - LLM-Assisted Labeling Platform",
    twitterDescription: "Training LLMs is continuous. Your labels should remember every decision, change, and training cycle.",
    twitterImage: "https://feathersai.app/feather/logo.png",
    canonicalUrl: "https://feathersai.app",
  },
}
