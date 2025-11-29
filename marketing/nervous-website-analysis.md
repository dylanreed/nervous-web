# Nervous Website Analysis
**URL:** https://nervous-web.netlify.app/
**Date:** November 29, 2025

---

## Executive Summary

This analysis covers design, SEO, and discoverability improvements for Nervous, a Discord community management agency. The site has solid foundational content and clear messaging but has significant opportunities for technical SEO optimization and enhanced discoverability.

**Note:** The analyzed site appears to be hosted on Netlify (likely staging/development). The production site exists at [nervous.net](https://www.nervous.net/).

---

## 1. Design Improvements

### Strengths
- Clean, modern aesthetic with consistent branding
- Good use of custom illustrations (campfire, matcha, disco ball, "Norris" character)
- Clear visual hierarchy with logical heading structure (H1 → H3)
- Strong call-to-action placement with multiple "Contact us" buttons

### Recommendations

#### 1.1 Visual Hierarchy & Layout
- **Add more whitespace** between sections to improve readability and reduce cognitive load
- **Implement scroll-triggered animations** for service cards to increase engagement
- **Add testimonial quotes** with client photos/logos to build social proof visually

#### 1.2 Mobile Experience
- Ensure the three-step process (Initiate → Activate → Moderate) stacks elegantly on mobile
- Consider a sticky mobile CTA button for easy contact access
- Test touch targets for navigation elements (minimum 44x44px)

#### 1.3 Case Studies Section
- Add **hover states** showing key metrics (e.g., "50K members", "200% engagement increase")
- Include **client logos prominently** (Google Gemini is a major brand - leverage it)
- Consider adding video testimonials or community screenshots

#### 1.4 Trust Indicators
- Add a **"Trusted By"** logo bar featuring client brands
- Display **metrics/stats** (e.g., "500K+ community members managed")
- Include **team photos** on the About page to humanize the brand

---

## 2. SEO Improvements

### Critical Issues

#### 2.1 Meta Tags (HIGH PRIORITY)
The site appears to be missing essential meta tags:

```html
<!-- Recommended additions -->
<title>Nervous | Discord Community Management & Moderation Experts</title>
<meta name="description" content="Nervous is a people-first agency specializing in Discord community building, moderation, and engagement strategies for brands like Google Gemini. Book a free consultation.">
<link rel="canonical" href="https://www.nervous.net/">
```

#### 2.2 Open Graph Tags (HIGH PRIORITY)
Add for social sharing optimization:

```html
<meta property="og:title" content="Nervous - Discord Community Building Experts">
<meta property="og:description" content="Build brand loyalty through thriving Discord communities. Strategy, activation, and moderation services.">
<meta property="og:image" content="https://nervous.net/og-image.jpg">
<meta property="og:url" content="https://www.nervous.net/">
<meta property="og:type" content="website">
```

#### 2.3 Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Nervous - Discord Community Building Experts">
<meta name="twitter:description" content="Build brand loyalty through thriving Discord communities.">
<meta name="twitter:image" content="https://nervous.net/twitter-card.jpg">
```

#### 2.4 Structured Data / Schema Markup
Add Organization and Service schema:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nervous",
  "description": "Discord community management and moderation agency",
  "url": "https://www.nervous.net",
  "logo": "https://nervous.net/logo.png",
  "sameAs": [
    "https://twitter.com/nervous",
    "https://linkedin.com/company/nervous"
  ],
  "service": {
    "@type": "Service",
    "serviceType": "Community Management",
    "provider": {
      "@type": "Organization",
      "name": "Nervous"
    }
  }
}
```

### Content SEO

#### 2.5 Keyword Optimization
**Target keywords to incorporate:**
- Primary: "Discord community management", "Discord moderation services"
- Secondary: "brand community building", "Discord server setup", "community engagement agency"
- Long-tail: "Discord community management for brands", "professional Discord moderators"

#### 2.6 Heading Structure
Current structure is good but could be enhanced:
- Ensure H1 contains primary keyword (e.g., "Discord Community Management Experts")
- Use H2s for main service pillars with keywords
- Add FAQ section with H3 questions (targets featured snippets)

#### 2.7 Image Optimization
- All images have alt text (good!)
- **Add descriptive file names** (e.g., `discord-community-strategy.jpg` vs `image1.jpg`)
- **Implement lazy loading** for below-fold images
- **Use WebP format** with fallbacks for faster loading

#### 2.8 Internal Linking
- Add contextual links between related pages
- Create a blog/resources section (see Discoverability)
- Link case studies to relevant service descriptions

---

## 3. Discoverability Improvements

### 3.1 Content Marketing (HIGH IMPACT)

**Start a Blog/Resources Section:**
- "How to Build a Brand Community on Discord"
- "Discord Moderation Best Practices for 2025"
- "Case Study: How We Grew Google Gemini's Discord to X Members"
- "Discord vs. Slack vs. Circle: Which Platform for Your Brand?"

This targets informational search queries and establishes thought leadership.

### 3.2 Local/Niche Directories
Submit to relevant directories:
- Clutch.co (B2B service reviews)
- Agency Spotter
- Discord server listing sites
- Community management tool directories (Circle, Discourse partner lists)

### 3.3 Social Proof & Backlinks
- **Guest post** on community management blogs
- **Appear on podcasts** (you already have one - cross-promote!)
- **Create shareable resources** (Discord setup checklist, moderation guidelines template)
- **Publish case studies** on Medium/LinkedIn for additional reach

### 3.4 Google Business Profile
If applicable, create/optimize a Google Business Profile for local searches.

### 3.5 Technical Discoverability

#### Sitemap & Robots.txt
Ensure these exist and are properly configured:
```
https://nervous.net/sitemap.xml
https://nervous.net/robots.txt
```

#### Page Speed
- Implement caching headers
- Minify CSS/JS
- Use a CDN (Netlify provides this)
- Target Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

#### Mobile-First Indexing
- Ensure mobile version has identical content to desktop
- Test with Google's Mobile-Friendly Test tool

### 3.6 Leverage Existing Assets

**Podcast Optimization:**
- Transcribe episodes for SEO value
- Create show notes with timestamps and links
- Submit to all podcast directories
- Create audiograms for social sharing

**Case Studies:**
- Make Google Gemini work more prominent (major brand recognition)
- Create detailed, keyword-rich case study pages
- Add measurable results and metrics

---

## 4. Quick Wins Checklist

| Priority | Task | Impact |
|----------|------|--------|
| HIGH | Add meta title and description | SEO |
| HIGH | Implement Open Graph tags | Social sharing |
| HIGH | Add structured data markup | Rich snippets |
| HIGH | Create a "Trusted By" client logo section | Trust/conversion |
| MEDIUM | Start a blog with 3-5 cornerstone articles | Organic traffic |
| MEDIUM | Add testimonials with client names | Social proof |
| MEDIUM | Submit to Clutch.co and directories | Backlinks |
| MEDIUM | Optimize images (WebP, lazy load) | Page speed |
| LOW | Add FAQ schema markup | Featured snippets |
| LOW | Create downloadable resources | Lead generation |

---

## 5. Competitive Positioning

The Discord community management space is relatively niche. Key differentiators to emphasize:
- **"People-first" approach** - emotional resonance over corporate speak
- **Notable clients** (Google Gemini) - instant credibility
- **Full-service offering** (strategy → activation → moderation)
- **Existing podcast** - thought leadership asset

---

## Conclusion

The Nervous website has strong branding and clear messaging. The primary opportunities are:

1. **Technical SEO foundations** - meta tags, schema, Open Graph (immediate)
2. **Social proof amplification** - leverage Google Gemini and other clients prominently
3. **Content marketing** - blog articles targeting "Discord community" keywords
4. **Thought leadership** - maximize the podcast's SEO and discoverability value

Implementing the high-priority items in this analysis should improve search visibility and conversion rates within 2-3 months.

---

*Analysis prepared for Nervous*
