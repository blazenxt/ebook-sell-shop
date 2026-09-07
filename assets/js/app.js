// Mavizio - Shared App Logic
const products = [
  {id:1, title:"The Art of Deep Work", author:"Aditya Sharma", cat:"selfhelp", price:199, mrp:499, rating:4.9, reviews:1842, pages:120, lang:"English", badge:"Bestseller #1", color:"from-[#1A2332] to-[#0F172A]", desc:"Focus, discipline and 10x productivity — without burnout. Practical exercises, daily rituals and freedom from phone addiction.", formats:"PDF • EPUB • MOBI + Audio"},
  {id:2, title:"Zero to One — Startup Playbook", author:"Rahul Verma", cat:"business", price:249, mrp:599, rating:4.8, reviews:923, pages:156, lang:"English", badge:"Editors' Pick", color:"from-[#7C3AED] to-[#4F46E5]", desc:"From idea to IPO — real case studies of Indian startups (Flipkart, Zerodha, boAt). Fundraising, go-to-market and hiring.", formats:"PDF • EPUB + Worksheets"},
  {id:3, title:"Atomic Habits — Indian Edition", author:"Sneha Gupta", cat:"selfhelp", price:179, mrp:399, rating:4.9, reviews:2412, pages:98, lang:"English", badge:"Trending", color:"from-[#059669] to-[#047857]", desc:"Small habits, big results. Includes habit tracking sheets and a 30-day challenge.", formats:"PDF • EPUB"},
  {id:4, title:"UPSC Prelims — Last 10 Years Solved", author:"DRISHTI Team", cat:"exam", price:299, mrp:799, rating:4.7, reviews:1103, pages:420, lang:"English", badge:"For Aspirants", color:"from-[#DC2626] to-[#991B1B]", desc:"Solved papers from 2015–2024 with detailed explanations, toppers' notes and elimination tricks.", formats:"PDF • Printable"},
  {id:5, title:"The Silent Valley — A Thriller", author:"Ananya Roy", cat:"fiction", price:149, mrp:349, rating:4.6, reviews:642, pages:210, lang:"English", badge:"New Release", color:"from-[#0F172A] to-[#334155]", desc:"A secret hidden in the beautiful valley of Darjeeling. A page-turner you will finish in one night.", formats:"EPUB • MOBI • Audio"},
  {id:6, title:"AI for Everyone — No Code", author:"Kunal Shah", cat:"tech", price:279, mrp:649, rating:4.8, reviews:812, pages:180, lang:"English", badge:"Hot", color:"from-[#0891B2] to-[#0E7490]", desc:"ChatGPT, Midjourney and automation — how to use them in business and work without coding. Prompt library included.", formats:"PDF • EPUB + Prompt Pack"},
  {id:7, title:"Money Mastery — Wealth Building Blueprint", author:"CA Neha Jain", cat:"finance", price:199, mrp:499, rating:4.9, reviews:1534, pages:134, lang:"English", badge:"Finance Bestseller", color:"from-[#CA8A04] to-[#A16207]", desc:"How to build wealth from your salary — SIPs, taxes, emergency fund and buying your first home. Calculator sheets included.", formats:"PDF • Excel Sheets"},
  {id:8, title:"SSC CGL — Maths Shortcuts", author:"Gagan Pratap Style", cat:"exam", price:159, mrp:399, rating:4.7, reviews:734, pages:260, lang:"English", badge:"Staff Pick", color:"from-[#7E22CE] to-[#6B21A8]", desc:"1000+ shortcuts, 20 mock tests and tricks to solve questions in under 5 minutes.", formats:"PDF • Practice Tests"},
];

let cart = JSON.parse(localStorage.getItem('mavizio_cart')||localStorage.getItem('granth_cart')||'[]');
let wishlist = JSON.parse(localStorage.getItem('mavizio_wish')||localStorage.getItem('granth_wish')||'[]');
let coupon = localStorage.getItem('mavizio_coupon') || null;

function saveCart(){ 
  localStorage.setItem('mavizio_cart', JSON.stringify(cart)); 
  localStorage.setItem('granth_cart', JSON.stringify(cart)); 
  if(coupon) localStorage.setItem('mavizio_coupon', coupon); else localStorage.removeItem('mavizio_coupon');
  updateCounts(); 
}
function saveWishlist(){
  localStorage.setItem('mavizio_wish', JSON.stringify(wishlist));
  localStorage.setItem('granth_wish', JSON.stringify(wishlist));
  updateCounts();
}
function updateCounts(){
  const totalQty = cart.reduce((s,c)=>s+c.qty,0);
  document.querySelectorAll('#cartCount').forEach(el=>{ el.textContent = totalQty; el.classList.toggle('hidden', totalQty===0); });
  document.querySelectorAll('#cartCount2').forEach(el=> el.textContent = `(${totalQty})`);
  document.querySelectorAll('#wishlistCount').forEach(el=>{ el.textContent = wishlist.length; el.classList.toggle('hidden', wishlist.length===0); });
}
function addToCart(id){
  const item = cart.find(c=>c.id===id);
  if(item) item.qty++; else cart.push({id, qty:1});
  saveCart(); 
  if(typeof renderCart === 'function') renderCart();
  toast('Added to cart <i class="ri-check-line ml-1"></i>');
}
function buyNow(id){ addToCart(id); setTimeout(()=>{ window.location.href='checkout.html'; }, 300); }
function toggleWish(id){
  if(wishlist.includes(id)) wishlist=wishlist.filter(x=>x!==id);
  else wishlist.push(id);
  saveWishlist();
  if(typeof renderProducts === 'function' && typeof currentCat !== 'undefined') renderProducts(currentCat, currentSearch);
  if(typeof renderWishlist === 'function') renderWishlist();
  updateCounts();
  toast(wishlist.includes(id)?'Added to wishlist':'Removed from wishlist');
}
function changeQty(id, delta){
  const c=cart.find(x=>x.id===id);
  if(!c) return;
  c.qty+=delta;
  if(c.qty<=0) cart=cart.filter(x=>x.id!==id);
  saveCart(); 
  if(typeof renderCart === 'function') renderCart();
  if(typeof renderCartPage === 'function') renderCartPage();
}
function removeFromCart(id){ cart=cart.filter(x=>x.id!==id); saveCart(); if(typeof renderCart === 'function') renderCart(); if(typeof renderCartPage === 'function') renderCartPage(); }
function getCartTotals(){
  let subtotal=0;
  cart.forEach(c=>{
    const p=products.find(x=>x.id===c.id);
    subtotal+=p.price*c.qty;
  });
  let discount=0;
  if(coupon==='MAVIZIO40') discount=Math.round(subtotal*0.4);
  if(coupon==='WELCOME20') discount=Math.round(subtotal*0.2);
  return {subtotal, discount, total: subtotal-discount};
}
function applyCouponCode(val){
  const code = val.trim().toUpperCase();
  if(['MAVIZIO40','WELCOME20'].includes(code)){ coupon=code; saveCart(); return true; }
  return false;
}
function toast(msg){
  let t=document.createElement('div');
  t.className='fixed bottom-6 left-1/2 -translate-x-1/2 bg-ink text-white px-5 py-3 rounded-full text-sm font-bold shadow-xl z-[70] flex items-center gap-2';
  t.innerHTML=`<span>${msg}</span>`;
  document.body.appendChild(t);
  setTimeout(()=>{ t.style.transition='all .3s'; t.style.opacity='0'; t.style.transform='translate(-50%, 10px)'; setTimeout(()=>t.remove(),300)},2200);
}
function getProductById(id){ return products.find(p=>p.id===Number(id)); }
function formatPrice(n){ return '₹'+n.toLocaleString('en-IN'); }

// Init counts on load
document.addEventListener('DOMContentLoaded', updateCounts);
