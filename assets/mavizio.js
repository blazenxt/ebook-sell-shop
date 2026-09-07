// Mavizio TAGDA Selling - countdown + sticky ATC + urgency
document.addEventListener('DOMContentLoaded', ()=>{
  // Header shadow on scroll
  window.addEventListener('scroll', ()=>{
    const h=document.querySelector('header');
    if(!h) return;
    if(window.scrollY>10) h.classList.add('shadow-[0_4px_24px_rgba(0,0,0,0.06)]');
    else h.classList.remove('shadow-[0_4px_24px_rgba(0,0,0,0.06)]');
  });
  // Countdown to midnight IST (Diwali sale)
  function updateCountdown(){
    const els=document.querySelectorAll('[data-countdown]');
    if(!els.length) return;
    const now=new Date();
    const midnight=new Date(now); midnight.setHours(24,0,0,0);
    let diff=Math.max(0, Math.floor((midnight-now)/1000));
    const h=Math.floor(diff/3600), m=Math.floor((diff%3600)/60), s=diff%60;
    els.forEach(el=>{
      el.innerHTML=`<span>${String(h).padStart(2,'0')}</span>:<span>${String(m).padStart(2,'0')}</span>:<span>${String(s).padStart(2,'0')}</span>`;
    });
  }
  setInterval(updateCountdown,1000); updateCountdown();
  // Live viewers fake pulse
  let viewers=1847;
  setInterval(()=>{
    viewers+= Math.floor(Math.random()*6)-2;
    document.querySelectorAll('[data-viewers]').forEach(el=>el.textContent=viewers.toLocaleString('en-IN'));
  },2800);
  // Sticky ATC on product page
  const sticky=document.getElementById('sticky-atc');
  if(sticky && document.querySelector('[data-sticky-trigger]')){
    const trigger=document.querySelector('[data-sticky-trigger]');
    const io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(!e.isIntersecting) sticky.classList.remove('translate-y-full');
        else sticky.classList.add('translate-y-full');
      });
    },{threshold:0});
    io.observe(trigger);
    // populate from product data attributes
    const img=document.querySelector('[data-product-img]')?.src;
    const title=document.querySelector('[data-product-title]')?.textContent;
    const price=document.querySelector('[data-product-price]')?.textContent;
    const compare=document.querySelector('[data-product-compare]')?.textContent;
    const variant=document.querySelector('[data-variant-id]')?.value;
    if(img) document.getElementById('sticky-img').src=img;
    if(title) document.getElementById('sticky-title').textContent=title;
    if(price){ document.getElementById('sticky-price').textContent=price; document.getElementById('sticky-btn-price').textContent=price; }
    if(compare) document.getElementById('sticky-compare').textContent=compare;
    if(variant) document.getElementById('sticky-variant').value=variant;
  }
  // FAQ accordion
  document.querySelectorAll('[data-faq-trigger]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const panel=btn.nextElementSibling;
      const icon=btn.querySelector('[data-faq-icon]');
      panel.classList.toggle('hidden');
      if(icon) icon.textContent = panel.classList.contains('hidden') ? '+' : '−';
    });
  });
});
