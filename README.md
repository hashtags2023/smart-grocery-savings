# 🛒 Smart Grocery Savings

> A personal finance content website helping everyday shoppers spend less on groceries through honest reviews, price comparisons, and practical money-saving strategies.

**Live Site:** [www.smartgrocerysavings.com](https://www.smartgrocerysavings.com)

---

## 📖 About

Smart Grocery Savings is a static content website built with HTML, CSS, and JavaScript and hosted on GitHub Pages with a custom domain. The site publishes in-depth guides, store comparisons, app reviews, and money-saving strategies focused on grocery shopping and personal finance.

Topics covered include:
- Grocery delivery service comparisons (Instacart, Walmart+, Amazon Fresh, Thrive Market)
- Cashback app reviews and stacking strategies (Ibotta, Fetch Rewards, Rakuten)
- Store price comparisons (Aldi vs Walmart, store brands vs name brands)
- Meal planning on a budget
- Health-conscious shopping (microplastics, organic options)
- Breaking grocery news and updates

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Styling, CSS Grid, Flexbox, animations |
| Vanilla JavaScript | Header includes, form handling, newsletter |
| GitHub Pages | Hosting and deployment |
| GitHub Actions | CI/CD build and deployment pipeline |
| Namecheap | Custom domain and DNS configuration |
| Web3Forms | Contact form and newsletter submissions |
| Google AdSense | Display advertising (pending approval) |
| Google Fonts | Typography (Playfair Display, Source Sans 3) |

---

## 📁 Project Structure

```
smart-grocery-savings/
├── index.html              # Homepage (magazine-style layout)
├── blog.html               # Blog listing page
├── about.html              # About page
├── contact.html            # Contact page with Web3Forms
├── privacy.html            # Privacy policy
├── header.html             # Shared header component
├── robots.txt              # Search engine crawl rules
├── sitemap.xml             # XML sitemap for all pages
├── CNAME                   # Custom domain configuration
├── css/
│   └── style.css           # Main stylesheet
├── images/                 # All site images
└── post_1.html             # Top 5 Grocery Delivery Services
    post_2.html             # Walmart+ vs Instacart
    post_3.html             # 7 Ways to Cut $50 Off Your Grocery Bill
    post_4.html             # Best Cashback Apps for Groceries
    post_5.html             # How to Meal Plan on $50 a Week
    post_6.html             # Aldi vs Walmart Price Comparison
    post_7.html             # Does Ibotta Really Save You Money?
    post_8.html             # Store Brands vs Name Brands
    post_9.html             # How to Save Money at Costco
    post_10.html            # Amazon Fresh Stores Closing 2026
    post_11.html            # Cheapest Avocado Prices by Store
    post_12.html            # How to Buy Food with Less Microplastics
```

---

## ✨ Features

- **Magazine-style homepage** with featured articles, sidebar, and savings stats
- **Responsive design** — works on mobile, tablet, and desktop
- **Shared header component** loaded via JavaScript fetch for easy site-wide updates
- **Newsletter signup** wired to Web3Forms — submissions delivered to Gmail
- **Contact form** with success message and Web3Forms backend
- **FTC affiliate disclosures** on all monetized posts
- **Content Security Policy** meta tags for XSS protection
- **SEO optimized** — meta descriptions, sitemap.xml, robots.txt
- **Privacy Policy** compliant with Google AdSense and Amazon Associates requirements

---

## 🚀 Deployment

The site deploys automatically via GitHub Actions on every push to `main`.

```bash
# Clone the repo
git clone https://github.com/hashtags2023/smart-grocery-savings.git

# Make changes locally
cd smart-grocery-savings

# Deploy
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Pages builds and deploys within 1–2 minutes of each push.

---

## 💰 Monetization

| Program | Status |
|---|---|
| Amazon Associates | ✅ Active — Store ID: smartgrocerys-20 |
| Google AdSense | 🔄 Pending approval |
| Thrive Market Affiliate | 🔄 In review |
| Instacart Affiliate (Impact.com) | 🔄 In review |
| Walmart Affiliate (Impact.com) | 🔄 Pending |
| HelloFresh (CJ Affiliate) | 🔄 Submitted |

---

## 📊 Content

**12 published posts** covering grocery delivery, savings apps, store comparisons, meal planning, health, and breaking news. New posts published 1–2 times per month.

---

## 🔒 Security

- HTTPS enforced via GitHub Pages SSL
- Content Security Policy meta tags
- X-Content-Type-Options and XSS protection headers
- No server-side code, no database — static site architecture minimizes attack surface
- Forms handled by Web3Forms (no sensitive data stored on site)

---

## 📬 Contact

**Website:** [smartgrocerysavings.com/contact.html](https://www.smartgrocerysavings.com/contact.html)
**Email:** smartgrocerysavings2026@gmail.com

---

## 📄 License

This project is proprietary. Content, design, and code are the property of Smart Grocery Savings. Not licensed for reuse or distribution.

---

*Built and maintained by Lori — software developer and creator of Smart Grocery Savings.*
