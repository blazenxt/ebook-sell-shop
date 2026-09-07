# Mavizio — Ebook Store 📚

Premium, real-store ebook shop — **Store Name: Mavizio** (your Shopify sample: https://18vhdv-dz.myshopify.com/)
Live: **https://blazenxt.github.io/ebook-sell-shop/**

Built mobile-first, no collapse, 100% English, all SVG icons (RemixIcon), UPI/Razorpay ready, instant download.

## 🌟 Pages (All Built)

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero, featured ebook, categories, bestsellers, how it works, reviews, newsletter |
| **Shop** | `shop.html` | All 8 ebooks, filters (category, price, search), sort, grid/list toggle |
| **Product** | `product.html?id=1` | Dynamic detail page for each ebook (8 products) — gallery, price, qty, add to cart/wishlist, related |
| **Cart** | `cart.html` | Full cart with qty, remove, coupon `MAVIZIO40`, order summary, secure checkout |
| **Checkout** | `checkout.html` | Contact + payment (UPI/Card/Netbanking), GSTIN, coupon, order summary |
| **Success** | `success.html` | Order confirmed, download links (PDF/EPUB/MOBI), related, print invoice |
| **Wishlist** | `wishlist.html` | Save favourites, add all to cart, remove |
| **My Downloads** | `downloads.html` | Lifetime access — re-download PDF/EPUB/MOBI + audio, purchase history |
| **About** | `about.html` | Story, mission, stats, team |
| **Contact** | `contact.html` | Form, email/WhatsApp, FAQ (download, refund, GST) |
| **404** | `404.html` | Custom not found |

All pages share header/footer, cart/wishlist via `localStorage` (`mavizio_cart`, `mavizio_wish`), and use `assets/js/app.js` for shared logic.

## ✨ Features

- **Design:** Minimal + Editorial, `ink`/`gold`/`paper` palette, Fraunces + Plus Jakarta Sans, card-hover, shimmer, no unicode emojis
- **Ebook Catalog:** 8 curated ebooks (Business, Self-Help, Fiction, UPSC, Tech, Finance) — English, INR, PDF/EPUB/MOBI
- **Cart & Wishlist:** Drawer + dedicated pages, qty, coupon `MAVIZIO40` (40% OFF) + `WELCOME20` (20%), bundle 4 @ ₹499
- **Checkout:** Email + WhatsApp, demo payment, GST inclusive, 10-sec delivery → success → downloads
- **Instant Download:** Post-payment links + `downloads.html` lifetime, re-download anytime
- **Responsive:** 320px → 1440px, `overflow-x-hidden`, `break-words`, safelist for Tailwind JIT, no collapse

## 🚀 Run Locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
# shop: http://localhost:8000/shop.html
# product: http://localhost:8000/product.html?id=1
```

No build step — Tailwind CDN + RemixIcon CDN.

## 🛠 Shopify Integration (Optional)

1. Create products in Shopify (digital, shipping off) + Digital Downloads app
2. Replace `products[]` in `assets/js/app.js` with Storefront API fetch
3. Enable Razorpay for Shopify (UPI) & GST invoices

## 📦 Deploy

- **GitHub Pages:** Already enabled — `blazenxt/ebook-sell-shop` → https://blazenxt.github.io/ebook-sell-shop/
- **Vercel/Netlify:** Drop folder
- **cPanel:** Upload all `*.html` + `assets/`

## 🔧 Customize

- **Products:** Edit `products` array in `assets/js/app.js`
- **Brand:** Search `Mavizio` → replace, colors in `tailwind.config` (`ink`, `gold`, `paper`)
- **Coupons:** `applyCouponCode()` in `app.js`
- **Real Payment:** Replace demo `placeOrder()` in `checkout.html` with Razorpay:
```js
new Razorpay({key:"rzp_live_xxx", amount:total*100, currency:"INR", name:"Mavizio", handler:()=>location.href='success.html'}).open()
```

## 📄 License

MIT — free to use for your ebook business.

---
Made for **Mavizio** • Asansol, WB • hello@mavizio.store • Author: `blazenxt`
