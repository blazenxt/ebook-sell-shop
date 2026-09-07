# Mavizio — Ebook Store 📚

Premium Shopify-inspired ebook store — **Store Name: Mavizio** (your sample: https://18vhdv-dz.myshopify.com/)
Live: Minimal + Editorial design for Indian market (INR, UPI, Razorpay, Instant Download).

## ✨ Features

- **Home:** Hero (Gyaan ka naya safar), Editors' Choice, Bestseller grid, Categories, How-it-works, Video, Reviews
- **Catalog:** 8 curated ebooks (Business, Self-Help, Fiction, UPSC, Tech, Finance) with filters & search (⌘K)
- **Cart Drawer:** Qty, coupon `MAVIZIO40` (40% OFF), bundle 4 ebooks @ ₹499
- **Checkout:** Email + WhatsApp, UPI / Card (Razorpay mock) / Demo → 10-sec download modal
- **Wishlist, Responsive, Toasts** — LocalStorage (`mavizio_cart`)

## 🚀 Run

Just open `index.html` — uses Tailwind CDN.

```bash
python3 -m http.server 8000
```

## 🛠 Shopify Connect

1. Products banao (digital, shipping off) + Shopify Digital Downloads app
2. Replace `products[]` with Storefront API or convert to Liquid sections
3. Payments: Razorpay for Shopify (UPI enable)

## 🔧 Customize

- Edit `products` array in `<script>` — title, price, color, desc
- Brand: `Mavizio` — change colors in `tailwind.config` (`ink`, `gold`, `paper`)
- Coupons: `applyCoupon()` → add `WELCOME20`
- Real payment:
```js
new Razorpay({key:"rzp_live_xxx", amount:total*100, currency:"INR", name:"Mavizio", handler:()=>showSuccess()}).open()
```

## 📦 Deploy

- GitHub Pages: repo `blazenxt/ebook-sell-shop` → https://blazenxt.github.io/ebook-sell-shop/
- Vercel/Netlify: drop folder

## 📄 License

MIT

---
Made for **Mavizio** • Asansol, WB • hello@mavizio.store
