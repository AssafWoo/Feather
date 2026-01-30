import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// SEO configurations for each product
const seoConfigs = {
  feather: {
    title: 'Feather AI - LLM-Assisted Labeling for Data Science Teams | Trusted, Auditable ML Labeling',
    metaTitle: 'Feather AI - LLM-Assisted Labeling for Data Science Teams | Trusted, Auditable ML Labeling',
    description: 'Feather turns LLM-assisted labeling into a controlled, auditable workflow for data science teams and researchers. Versioned schemas, human approvals, and reproducible exports for machine learning projects.',
    keywords: 'LLM labeling, data labeling, machine learning labeling, ML data annotation, LLM-assisted labeling, data science tools, ML workflow, dataset versioning, label audit trail, reproducible ML, MLflow integration, W&B integration, DVC integration, data science platform, research tools, ML labeling platform, human-in-the-loop labeling, label governance, ML data quality',
    author: 'Feather AI',
    themeColor: '#ec4899',
    url: 'https://feathersai.app',
    ogTitle: 'Feather AI - LLM-Assisted Labeling for Data Science Teams',
    ogDescription: 'Trusted, auditable LLM-assisted labeling workflow with versioned schemas, human approvals, and reproducible exports. Built for data science teams and researchers.',
    ogImage: 'https://feathersai.app/feather/logo.png',
    ogSiteName: 'Feather AI',
    twitterTitle: 'Feather AI - LLM-Assisted Labeling for Data Science Teams',
    twitterDescription: 'Trusted, auditable LLM-assisted labeling workflow with versioned schemas, human approvals, and reproducible exports.',
    twitterImage: 'https://feathersai.app/feather/logo.png',
    favicon32: '/feather/feather-favicon-32.png?v=2',
    favicon16: '/feather/feather-favicon-16.png?v=2',
    appleTouchIcon: '/feather/logo.png?v=2',
    preloadLogo: '/feather/logo.png',
    preloadHero: '/feather/images/feather-hero.png',
    apiPreconnect: 'https://api.feathersai.app',
    gtmId: 'GTM-PH7R9KK2',
    gadsId: 'AW-17869484056',
  },
  plain: {
    title: 'Plain - Turn Legacy Data Into an AI-Ready Foundation',
    metaTitle: 'Plain - Turn Legacy Data Into an AI-Ready Foundation',
    description: 'We help organizations transform legacy systems — old databases, pipelines, and schemas — into AI-ready foundations. Before agents. Fix the data.',
    keywords: 'legacy data, AI-ready data, LLM training data, data transformation, semantic data, data quality, AI infrastructure, data modernization, legacy systems, data migration, AI data pipeline',
    author: 'Plain',
    themeColor: '#7C3AED',
    url: 'https://plaindataai.com',
    ogTitle: 'Plain - Turn Legacy Data Into an AI-Ready Foundation',
    ogDescription: "We don't replace legacy systems — we elevate them to an AI-ready state.",
    ogImage: 'https://plaindataai.com/plain/logo.png',
    ogSiteName: 'Plain',
    twitterTitle: 'Plain - Legacy Data to AI-Ready Foundation',
    twitterDescription: 'Before agents, fix the data. We help organizations transform legacy systems into AI-ready foundations.',
    twitterImage: 'https://plaindataai.com/plain/logo.png',
    favicon32: '/plain/plain-favicon-32.png?v=2',
    favicon16: '/plain/plain-favicon-16.png?v=2',
    appleTouchIcon: '/plain/logo.png?v=2',
    preloadLogo: '/plain/logo.png',
    preloadHero: null,
    apiPreconnect: 'https://api.plain.app',
    gtmId: 'GTM-KDFVB79C',
    gadsId: null, // Configure Google Ads conversion tracking inside GTM
  },
}

// Plugin to transform index.html based on VITE_PRODUCT
function seoPlugin() {
  const product = process.env.VITE_PRODUCT || 'feather'
  const seo = seoConfigs[product] || seoConfigs.feather

  return {
    name: 'seo-transform',
    transformIndexHtml(html) {
      // Replace title
      html = html.replace(
        /<title>.*?<\/title>/,
        `<title>${seo.title}</title>`
      )

      // Replace meta tags
      html = html.replace(
        /<meta name="title" content=".*?" \/>/,
        `<meta name="title" content="${seo.metaTitle}" />`
      )
      html = html.replace(
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="${seo.description}" />`
      )
      html = html.replace(
        /<meta name="keywords" content=".*?" \/>/,
        `<meta name="keywords" content="${seo.keywords}" />`
      )
      html = html.replace(
        /<meta name="author" content=".*?" \/>/,
        `<meta name="author" content="${seo.author}" />`
      )
      html = html.replace(
        /<meta name="theme-color" content=".*?" \/>/,
        `<meta name="theme-color" content="${seo.themeColor}" />`
      )

      // Replace Open Graph tags
      html = html.replace(
        /<meta property="og:url" content=".*?" \/>/,
        `<meta property="og:url" content="${seo.url}/" />`
      )
      html = html.replace(
        /<meta property="og:title" content=".*?" \/>/,
        `<meta property="og:title" content="${seo.ogTitle}" />`
      )
      html = html.replace(
        /<meta property="og:description" content=".*?" \/>/,
        `<meta property="og:description" content="${seo.ogDescription}" />`
      )
      html = html.replace(
        /<meta property="og:image" content=".*?" \/>/,
        `<meta property="og:image" content="${seo.ogImage}" />`
      )
      html = html.replace(
        /<meta property="og:site_name" content=".*?" \/>/,
        `<meta property="og:site_name" content="${seo.ogSiteName}" />`
      )

      // Replace Twitter tags
      html = html.replace(
        /<meta name="twitter:url" content=".*?" \/>/,
        `<meta name="twitter:url" content="${seo.url}/" />`
      )
      html = html.replace(
        /<meta name="twitter:title" content=".*?" \/>/,
        `<meta name="twitter:title" content="${seo.twitterTitle}" />`
      )
      html = html.replace(
        /<meta name="twitter:description" content=".*?" \/>/,
        `<meta name="twitter:description" content="${seo.twitterDescription}" />`
      )
      html = html.replace(
        /<meta name="twitter:image" content=".*?" \/>/,
        `<meta name="twitter:image" content="${seo.twitterImage}" />`
      )

      // Replace canonical
      html = html.replace(
        /<link rel="canonical" href=".*?" \/>/,
        `<link rel="canonical" href="${seo.url}/" />`
      )

      // Replace favicons
      html = html.replace(
        /<link rel="icon" type="image\/png" sizes="32x32" href=".*?" \/>/,
        `<link rel="icon" type="image/png" sizes="32x32" href="${seo.favicon32}" />`
      )
      html = html.replace(
        /<link rel="icon" type="image\/png" sizes="16x16" href=".*?" \/>/,
        `<link rel="icon" type="image/png" sizes="16x16" href="${seo.favicon16}" />`
      )
      html = html.replace(
        /<link rel="shortcut icon" type="image\/png" href=".*?" \/>/,
        `<link rel="shortcut icon" type="image/png" href="${seo.favicon32}" />`
      )
      html = html.replace(
        /<link rel="apple-touch-icon" href=".*?" \/>/,
        `<link rel="apple-touch-icon" href="${seo.appleTouchIcon}" />`
      )

      // Replace preload hints
      html = html.replace(
        /<link rel="preload" href=".*?" as="image" \/>\s*<link rel="preload" href=".*?" as="image" \/>/,
        seo.preloadHero 
          ? `<link rel="preload" href="${seo.preloadLogo}" as="image" />\n    <link rel="preload" href="${seo.preloadHero}" as="image" />`
          : `<link rel="preload" href="${seo.preloadLogo}" as="image" />`
      )

      // Replace API preconnect
      html = html.replace(
        /<link rel="preconnect" href="https:\/\/api\.feathersai\.app" \/>/,
        `<link rel="preconnect" href="${seo.apiPreconnect}" />`
      )
      html = html.replace(
        /<link rel="dns-prefetch" href="https:\/\/api\.feathersai\.app" \/>/,
        `<link rel="dns-prefetch" href="${seo.apiPreconnect}" />`
      )

      // Handle GTM - remove if not configured, replace if different
      if (!seo.gtmId) {
        // Remove GTM script
        html = html.replace(
          /<!-- Google Tag Manager -->[\s\S]*?<!-- End Google Tag Manager -->/g,
          '<!-- Google Tag Manager disabled for this product -->'
        )
        // Remove GTM noscript
        html = html.replace(
          /<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->/g,
          ''
        )
      } else {
        // Replace GTM ID with product-specific ID
        html = html.replace(/GTM-[A-Z0-9]+/g, seo.gtmId)
      }

      // Handle Google Ads - remove if not configured
      if (!seo.gadsId) {
        html = html.replace(
          /<!-- Google tag \(gtag\.js\) -->[\s\S]*?gtag\('config', 'AW-\d+'\);\s*<\/script>/g,
          '<!-- Google Ads disabled for this product -->'
        )
      }

      // Replace structured data - simplified version for Plain
      if (product === 'plain') {
        // Replace all Feather-specific structured data with Plain versions
        html = html.replace(
          /<!-- Structured Data \(JSON-LD\) -->[\s\S]*?<!-- FAQ Structured Data for Google Featured Snippets -->/,
          `<!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Plain",
      "applicationCategory": "DataScienceApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/PreOrder"
      },
      "description": "We help organizations transform legacy systems — old databases, pipelines, and schemas — into AI-ready foundations.",
      "featureList": [
        "Legacy data transformation",
        "Semantic schema versioning",
        "LLM-ready dataset exports",
        "Safe-to-train signals",
        "Human confirmation workflow"
      ],
      "softwareVersion": "Early Access"
    }
    </script>
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Plain",
      "url": "https://plaindataai.com",
      "logo": "https://plaindataai.com/plain/logo.png",
      "description": "Turn legacy data into an AI-ready foundation"
    }
    </script>
    
    <!-- FAQ Structured Data for Google Featured Snippets -->`
        )

        // Replace FAQ structured data
        html = html.replace(
          /<script type="application\/ld\+json">\s*\{\s*"@context": "https:\/\/schema\.org",\s*"@type": "FAQPage"[\s\S]*?<\/script>/,
          `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why not just build agents on top of our data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agents amplify whatever data they sit on. If meaning is implicit, outdated, or inconsistent, agents don't help — they just fail faster. We focus on making your data AI-ready first, so anything you build on top actually works."
          }
        },
        {
          "@type": "Question",
          "name": "Is this a data warehouse or data catalog?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We don't store or organize your data. We add a semantics layer on top of your existing infrastructure that captures what your data means — so it's safe to train LLMs on."
          }
        },
        {
          "@type": "Question",
          "name": "Does this require changing our code or pipelines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We connect to your existing databases, code repositories, and pipelines as read-only observers. We document meaning — we don't rewrite infrastructure."
          }
        }
      ]
    }
    </script>`
        )
      }

      return html
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoPlugin()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
