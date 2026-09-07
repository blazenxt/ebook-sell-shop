// Mavizio Shopify Theme JS
document.addEventListener('DOMContentLoaded', ()=>{
  // Header scroll
  window.addEventListener('scroll', ()=>{
    const h=document.querySelector('header');
    if(!h) return;
    if(window.scrollY>10) h.classList.add('shadow-[0_4px_24px_rgba(0,0,0,0.06)]');
    else h.classList.remove('shadow-[0_4px_24px_rgba(0,0,0,0.06)]');
  });
});
