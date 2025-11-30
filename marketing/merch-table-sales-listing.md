# Merch Table Landing Page

This is a standalone single-page website for Merch Table.

## HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Merch Table — Exclusive Discord Merch for Shopify</title>
  <meta name="description" content="Connect your Discord community to your Shopify store. Offer exclusive products based on Discord roles.">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a2e; }

    .hero {
      min-height: 100vh;
      background: linear-gradient(135deg, #5865f2 0%, #7289da 50%, #99aab5 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 40px 20px;
      color: white;
    }

    .logo { font-size: 3rem; margin-bottom: 1rem; }
    h1 { font-size: 3.5rem; font-weight: 800; margin-bottom: 1rem; max-width: 800px; }
    .tagline { font-size: 1.4rem; opacity: 0.9; max-width: 600px; margin-bottom: 2rem; }

    .cta-buttons { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
    .btn {
      padding: 16px 32px;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
    .btn-primary { background: white; color: #5865f2; }
    .btn-secondary { background: transparent; color: white; border: 2px solid white; }

    .features {
      padding: 80px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .features h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .feature {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
    }

    .feature-icon { font-size: 3rem; margin-bottom: 1rem; }
    .feature h3 { font-size: 1.3rem; margin-bottom: 0.5rem; }
    .feature p { color: #666; }

    .how-it-works {
      background: #1a1a2e;
      color: white;
      padding: 80px 20px;
    }

    .how-it-works h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }

    .steps {
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .step {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
    }

    .step-number {
      background: #5865f2;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.2rem;
      flex-shrink: 0;
    }

    .step h3 { margin-bottom: 0.5rem; }
    .step p { opacity: 0.8; }

    .pricing {
      padding: 80px 20px;
      text-align: center;
    }

    .pricing h2 { font-size: 2.5rem; margin-bottom: 1rem; }
    .pricing .subtitle { color: #666; margin-bottom: 3rem; font-size: 1.2rem; }

    .price-card {
      max-width: 400px;
      margin: 0 auto;
      background: white;
      border: 2px solid #5865f2;
      border-radius: 16px;
      padding: 3rem 2rem;
      box-shadow: 0 8px 32px rgba(88, 101, 242, 0.15);
    }

    .price { font-size: 3rem; font-weight: 800; color: #5865f2; }
    .price span { font-size: 1rem; color: #666; font-weight: normal; }

    .price-features {
      list-style: none;
      margin: 2rem 0;
      text-align: left;
    }

    .price-features li {
      padding: 0.75rem 0;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .price-features li::before {
      content: "✓";
      color: #5865f2;
      font-weight: bold;
    }

    footer {
      background: #1a1a2e;
      color: white;
      text-align: center;
      padding: 40px 20px;
    }

    footer a { color: #7289da; }

    @media (max-width: 600px) {
      h1 { font-size: 2.5rem; }
      .tagline { font-size: 1.1rem; }
    }
  </style>
</head>
<body>
  <section class="hero">
    <div class="logo">🎫</div>
    <h1>Exclusive Merch for Your Discord Community</h1>
    <p class="tagline">Connect Shopify to Discord and let members unlock products based on their roles. Server Boosters, Patreon supporters, VIPs — reward them all.</p>
    <div class="cta-buttons">
      <a href="#pricing" class="btn btn-primary">Get Started</a>
      <a href="#how-it-works" class="btn btn-secondary">See How It Works</a>
    </div>
  </section>

  <section class="features">
    <h2>Everything You Need</h2>
    <div class="feature-grid">
      <div class="feature">
        <div class="feature-icon">🎭</div>
        <h3>Role-Based Access</h3>
        <p>Restrict products to specific Discord roles. Only members with the right roles can view and purchase.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">🔄</div>
        <h3>Automatic Sync</h3>
        <p>When roles change in Discord, customer access updates automatically. No manual work required.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">🛒</div>
        <h3>Cart Validation</h3>
        <p>Shopify Functions verify eligibility at checkout. No workarounds, no unauthorized purchases.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">🔗</div>
        <h3>Simple Linking</h3>
        <p>Members connect their accounts with a single Discord command. Takes seconds.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">📊</div>
        <h3>Admin Dashboard</h3>
        <p>Manage visibility rules, view linked accounts, and force-sync customers when needed.</p>
      </div>
      <div class="feature">
        <div class="feature-icon">🔒</div>
        <h3>Secure by Design</h3>
        <p>OAuth authentication, encrypted tokens, and webhook verification keep everything safe.</p>
      </div>
    </div>
  </section>

  <section class="how-it-works" id="how-it-works">
    <h2>How It Works</h2>
    <div class="steps">
      <div class="step">
        <div class="step-number">1</div>
        <div>
          <h3>Install the App</h3>
          <p>Add Merch Table to your Shopify store and connect your Discord server.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">2</div>
        <div>
          <h3>Set Up Rules</h3>
          <p>Choose which Discord roles can access which products. Create as many rules as you need.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">3</div>
        <div>
          <h3>Members Link Accounts</h3>
          <p>Community members use /link_shopify in Discord to connect their Shopify account.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">4</div>
        <div>
          <h3>Exclusive Access Unlocked</h3>
          <p>Linked members with the right roles can now purchase your exclusive products.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="pricing" id="pricing">
    <h2>Simple Pricing</h2>
    <p class="subtitle">One plan. Everything included.</p>
    <div class="price-card">
      <div class="price">$29<span>/month</span></div>
      <ul class="price-features">
        <li>Unlimited linked customers</li>
        <li>Unlimited product rules</li>
        <li>Unlimited Discord roles</li>
        <li>Real-time sync</li>
        <li>Cart validation (Shopify Functions)</li>
        <li>Admin dashboard</li>
        <li>Priority support</li>
      </ul>
      <a href="https://apps.shopify.com/merch-table" class="btn btn-primary" style="display: block; text-align: center;">Install on Shopify</a>
    </div>
  </section>

  <footer>
    <p>Merch Table — Built for creators who reward their community.</p>
    <p style="margin-top: 1rem; opacity: 0.7;">
      <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="mailto:support@merchtable.app">Contact</a>
    </p>
  </footer>
</body>
</html>
```

## Sections

### Hero
- Logo emoji
- Main headline
- Tagline/value proposition
- CTA buttons (Get Started, How It Works)

### Features (6 cards)
1. Role-Based Access
2. Automatic Sync
3. Cart Validation
4. Simple Linking
5. Admin Dashboard
6. Secure by Design

### How It Works (4 steps)
1. Install the App
2. Set Up Rules
3. Members Link Accounts
4. Exclusive Access Unlocked

### Pricing
- Single tier: $29/month (adjust as needed)
- Feature list
- Install CTA

### Footer
- Tagline
- Privacy, Terms, Contact links

## Customization Notes

- Replace `$29/month` with your actual pricing
- Update Shopify App Store link when published
- Add real privacy/terms pages
- Consider adding testimonials section
- Add analytics tracking (Google Analytics, etc.)
