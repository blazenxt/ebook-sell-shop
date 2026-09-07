# Granth — Ebook Sell Shop 📚

Modern, fast, mobile-first ebook store inspired by your Shopify sample: **https://18vhdv-dz.myshopify.com/**
Live design: Minimal + Editorial, built for Indian market (INR, UPI, Razorpay, Instant Download).

## ✨ Features

- **Premium Home** — Hero (Gyaan ka naya safar), Bestseller grid, Categories, How-it-works, Video, Reviews
- **Ebook Catalog** — 8 curated ebooks (Business, Self-Help, Fiction, UPSC, Tech, Finance) with filters & search (⌘K)
- **Cart Drawer** — Qty, coupon `GRANTH40` (40% OFF), bundle offer (4 ebooks @ ₹499)
- **Checkout** — Email + WhatsApp, payment via UPI / Card (Razorpay mock) / Demo, GST inclusive, 10-sec delivery simulation
- **Instant Download** — Post-payment modal with download links + email/WhatsApp dispatch (mock)
- **Wishlist, Search, Responsive, Toasts** — LocalStorage persistence

## 🚀 Run Locally

Just open `index.html` in browser — no build step. Uses Tailwind CDN.

```bash
# or serve
python3 -m http.server 8000
# open http://localhost:8000
```

## 🛠 Shopify Integration

This is a **standalone storefront**. To use with Shopify:

1. Create products in Shopify (digital products, disable shipping, add Digital Downloads app)
2. Replace `products[]` in `index.html` with Shopify Storefront API fetch, or convert theme to Liquid:
   - `layout/theme.liquid` ← wrap `index.html` head/body
   - `sections/hero.liquid`, `sections/product-grid.liquid` etc.
3. Add [Shopify Digital Downloads](https://apps.shopify.com/digital-downloads) for auto delivery post-purchase
4. Payment: Razorpay for Shopify — enable UPI in settings

## 🔧 Customize

- Edit `products` array in `<script>` — title, price, mrp, category, color, desc
- Change brand: replace `Granth.` logo, colors in `tailwind.config` (`ink`, `gold`, `paper`)
- Coupons: edit `applyCoupon()` — add codes like `WELCOME20`
- Payment: replace mock `placeOrder()` with real Razorpay Checkout:
  ```js
  var options = { key: "rzp_live_xxx", amount: total*100, currency: "INR", name: "Granth", handler: function(res){ showSuccess(); } };
  new Razorpay(options).open();
  ```

## 📦 Deploy

- **GitHub Pages:** Push repo, enable Pages (root)
- **Vercel/Netlify:** Drop folder
- **Hostinger / cPanel:** Upload `index.html` + assets

## 📄 License

MIT — free to use for your ebook business.

---
Made with ❤️ in Asansol, West Bengal for **BlazeNXT** • Support: hello@granth.store
